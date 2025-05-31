import { createAuthClient } from "better-auth/vue";
import { defineStore } from "pinia";
import { computed } from "vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = authClient.useSession();
  const user = computed(() => session.value.data?.user);
  console.log("isPending:", session.value.isPending);
  console.log("isRefetching:", session.value.isRefetching);
  const loading = computed(() => session.value.isPending || session.value.isRefetching);

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }

  return {
    loading,
    signIn,
    signOut,
    user,
  };
});
