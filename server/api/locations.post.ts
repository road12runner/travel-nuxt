import db from "~/lib/db";
import { InsertLocation, location } from "~/lib/db/schema";

export default defineEventHandler(async (event) => {
  if (!event.context.user) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    }));
  }

  const result = await readValidatedBody(event, InsertLocation.safeParse);

  if (!result.success) {
    const statusMessage = result.error.issues.map(issue => `${issue.path.join("")} : ${issue.message}`).join("; ");

    const data = result.error.issues.reduce((errors, issue) => {
      const path = issue.path.join(".");
      return {
        ...errors,
        [path]: issue.message,
      };
    }, {}) as Record<string, string>;

    return sendError(event, createError({
      statusCode: 422,
      statusMessage,
      data,
    }));
  }

  const [created] = await db.insert(location).values({ ...result.data, userId: event.context.user.id, slug: result.data.name.replace(" ", "-").toLowerCase(),
  }).returning();

  return created;
});
