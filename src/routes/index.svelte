<script context="module">
    export async function load({ session }) {
        // console.log(session);
      return {
        props: {
          user: session.user,
        },
      };
    }
  </script>
  
  <script>
    export let user;
  </script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<!-- <a href="/login">
<button>Login using Github</button>
</a> -->

{#if user}
  <h2>Welcome {user}</h2>
  <a href="/logout">
    <button>Logout</button>
  </a>
{:else}
  <a href="/login">
    <button>Login using Github</button>
  </a>
{/if}