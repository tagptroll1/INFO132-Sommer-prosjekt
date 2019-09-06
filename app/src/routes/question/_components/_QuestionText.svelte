<script>
  import question from "../../../stores/question";

  function parseText(txt) {
    while (txt.search("\n") !== -1) {
      txt = txt.replace("\n", "<br/>");
    }

    let count = (txt.match(/`/g) || []).length;
    if (count >= 2 && count % 2 === 0) {
      while (txt.search("`") !== -1 && count % 2 === 0) {
        txt = txt.replace(
          "`",
          "<b>"
        );
        txt = txt.replace("`", "</b>");
        count = (txt.match(/`/g) || []).length;
      }
    }
    return txt;
  }

  $: text = parseText($question.question_text);
</script>
<style>
  p{
    margin: 0;
    color: black;
    padding: 5px 10px;
  }
  div{
    background-color: #ffffff;
    max-width: 600px;
    margin: 0 auto;
  }
</style>
<div>
<p>
  {@html text}
</p>
</div>
