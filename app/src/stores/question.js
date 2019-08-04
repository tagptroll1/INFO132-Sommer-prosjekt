import { writable, get } from "svelte/store";
import { questionStore } from "./questionStore";

function createQuestion() {
    const { subscribe, set } = writable({});
    let index = 0;

    function setQuestion(i) {
        if (i < 0) index = 0;
        if (i >= get(questionStore).length)
            index = get(questionStore).length - 1;

        set(get(questionStore)[index]);
    }

    function nextQuestion() {
        if (index + 1 < get(questionStore).length) index++;
        set(get(questionStore)[index]);
    }

    function prevQuestion() {
        if (index - 1 >= 0) index--;
        set(get(questionStore)[index]);
    }

    function gotoFirst() {
        set(get(questionStore)[0]);
        index = 0;
    }

    function getIndex() {
        set(get(questionStore)[index]);
        return index;
    }

    return {
        subscribe,
        setQ: i => setQuestion(i),
        next: () => nextQuestion(),
        prev: () => prevQuestion(),
        reset: () => gotoFirst(),
        index: () => getIndex(),
    };
}

export const question = createQuestion();
