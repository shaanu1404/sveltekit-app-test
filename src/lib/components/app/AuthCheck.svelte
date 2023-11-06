<script lang="ts">
  import { user } from "$lib/stores/userStore";
</script>

{#if $user}
  <slot />
{:else}
  <div class="text-center">
    <p class="text-xl mb-3 text-white">
      Please login to use application or create a new account
    </p>
    <a href="/login" class="btn btn-accent">Login</a>
  </div>
{/if}
