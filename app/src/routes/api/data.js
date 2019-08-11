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
        const dev = process.env.NODE_ENV === "development";
        const url = dev ? process.env.API_URL_DEV : process.env.API_URL;

        if (body.length <= 0) res.end("No body provided");

        await fetch(`${url}/api/v1/dataset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `token ${process.env.API_KEY}`,
            },
            body: JSON.stringify(body),
        });
    } catch (error) {
        console.error(error);
    }
}
