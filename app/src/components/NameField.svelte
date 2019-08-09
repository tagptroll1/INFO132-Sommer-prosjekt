    <script>
        import user from "../stores/user.js";

        let name = "anon", error ="";


        export let handleSubmit = function(event) {
            const {value} = this.elements.nameField;
            if(/^[a-zA-ZæøåÆØÅ]{3}\d{3}/.test(value)){
                name = value;
                error = "";
            }else{
                error = "All usernames must have the following pattern ono123";
                name = "anon";
            }
            user.set(name);
            
        };
    </script>

    <p>{error}</p>
    <p>Current ID is:   {name}</p>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="nameField">Enter UiB username:</label>
        <input type="nameField" id="nameField" required />
        <button type="submit">Submit</button>
    </form>