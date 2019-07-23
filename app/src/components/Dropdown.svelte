<script>

  export let currentQuestion;

  function g() {
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue)
  }

</script>

<style>


</style>

<select id="list" onchange="g">
    {#each currentQuestion["alternatives"] as item}
        <option value={item}> {item} </option>
    {/each}    
</select>
 
