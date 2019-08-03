export async function get(req, res) {
    try {
        const fetch = process.browser
            ? window.fetch
            : require("node-fetch").default;

        const resp = await fetch(
            "http://localhost:5000/api/v1/multi_choice/set/2"
        );
        const json = await resp.json();

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(json));
    } catch (error) {
        res.statusCode = 500;
        res.end({ error });
    }
}
