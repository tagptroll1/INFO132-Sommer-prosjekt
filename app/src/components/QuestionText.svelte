<script>
    import { currentQuestion } from "../stores/currentQuestion";
    import { questionStore } from "../stores/questionStore";
</script>

{ $questionStore[$currentQuestion]["question_text"] }