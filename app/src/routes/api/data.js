export async function post(req, res) {
    try {
        const fetch = process.browser
            ? window.fetch
            : require("node-fetch").default;
        const body = req.body;

        body.forEach((answer, i) => {
            if (answer.selected_answer === null) {
                answer.selected_answer = "No answer";
                body[i] = answer;
            }
        });
        console.log(body);

        await fetch(`${process.env.API_URL}/api/v1/dataset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    } catch (error) {
        console.error(error);
    }
}
