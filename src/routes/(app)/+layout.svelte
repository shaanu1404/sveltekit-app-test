<script lang="ts">
  import AuthCheck from "$lib/components/app/AuthCheck.svelte";
</script>

<AuthCheck>
  <slot />
</AuthCheck>
