<script>
  export let categories;
</script>
<style>
  .breadcrumb{
    background-color: white;
  }
  .breadcrumb ul {
    list-style: none;
    color: var(--gray-4);
  }

  /* Display list items side by side */
  .breadcrumb ul li {
    display: inline;
    font-size: 18px;
  }

  /* Add a slash symbol (/) before/behind each list item */
  .breadcrumb ul li+li:before {
    padding: 8px;
    color: black;
    content: "/\00a0";
  }

</style>
<div class="breadcrumb p-1">
  <ul>
    {#each categories as item}
      <li>{item}</li>
    {/each}
  </ul>
</div>
