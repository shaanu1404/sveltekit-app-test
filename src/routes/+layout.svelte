<script lang="ts">
  import Navbar from "$lib/components/shared/Navbar.svelte";
  import "../app.css";
</script>

<Navbar />
<main class="mx-auto px-4">
  <slot />
</main>
