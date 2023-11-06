<script lang="ts">
  import AuthCheck from "$lib/components/app/AuthCheck.svelte";
  import { user } from "$lib/stores/userStore";
</script>

<AuthCheck>
  <h1 class="text-lg text-white font-bold">Profile</h1>
  {#if $user}
    <p>
      {$user?.email}
    </p>
  {:else}
    <p>User not available</p>
  {/if}
</AuthCheck>
