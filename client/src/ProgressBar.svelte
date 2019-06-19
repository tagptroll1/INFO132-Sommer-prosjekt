
<script>


    //TODO
    // - Homebutton
    // - More quiz logic, where to store this?
    // ?!?! __ ? ?!?!?

    //Quiz progress logic here
    let numCorrect = 0;

    //Initially set the progressbar to no progress :)
    let myBarWidth = 0;
    
    const myQuestions = [];
    let numQuestions = 5;
    
    function addProgress() {

        // Logic goes here to keep track of the progress so far

        myBarWidth += 100 / numQuestions;
        if (myBarWidth > 100) {
            myBarWidth = 100;
        }
        document.getElementById("myBar").style.width = myBarWidth + "%";
    }


</script>


<style>
#myProgress {
    width: 100%;
    background-color: #ddd;
    margin-bottom: 20px;
}
#myBar {
    height: 30px;
    background-color: #5cb85c;
    /* width of the bar set initially to 0% to hide it */
     
    width: 0%;
    /* transition for smooth animation */
     
    transition: all ease-in-out 0.5s;
}
 
</style>

   <!-- Progress bar -->
   <div id="myProgress">
      <div id="myBar"></div>
   </div>
   <!-- Buttons -->
   <button id="next" on:click={addProgress}>Neste spørsmål</button>

   