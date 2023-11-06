<script lang="ts">
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "$lib/firebase";
  import Spinner from "$lib/components/shared/Spinner.svelte";
  import { goto } from "$app/navigation";

  let isLoading = false;
  let error = "";
  let email = "";
  let password = "";

  async function handleSubmit(e: SubmitEvent) {
    try {
      error = "";
      isLoading = true;
      await loginUser(email, password);
      goto("/", {
        replaceState: true,
      });
    } catch (err: any) {
      error = err.message;
    } finally {
      isLoading = false;
    }
  }

  const loginUser = async (email: string, password: string) => {
    if (!email.trim() || !password.trim()) {
      throw new Error("Invalid credentials");
    }
    await signInWithEmailAndPassword(auth, email, password);
  };

  $: isEmailInvalid = email === "";
</script>

<div class="card w-96 bg-base-100 shadow-xl mx-auto">
  <img
    src="/logo.png"
    alt="logo"
    class="w-24 h-24 object-contain rounded-lg mx-auto"
  />
  <form class="card-body" on:submit|preventDefault={handleSubmit}>
    {#if error}
      <p class="text-red-500 text-sm text-center">{error}</p>
    {/if}
    <div>
      <div class="form-control w-full max-w-xs">
        <label class="label" for="email">
          <span class="label-text">Email Address</span>
        </label>
        <input
          id="email"
          type="email"
          bind:value={email}
          placeholder="Your email here..."
          class="input input-bordered w-full max-w-xs"
          class:input-error={isEmailInvalid}
          autocomplete="off"
        />
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label" for="password">
          <span class="label-text">Password</span>
        </label>
        <input
          id="password"
          type="password"
          bind:value={password}
          placeholder="*********"
          class="input input-bordered w-full max-w-xs"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="card-actions">
      <button type="submit" class="btn btn-primary flex-1">
        {#if isLoading}<Spinner />{/if} Login
      </button>
    </div>
  </form>
</div>
