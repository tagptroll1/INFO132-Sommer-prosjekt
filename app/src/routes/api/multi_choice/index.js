export function get(req, res) {
    const fetch = process.browser
        ? window.fetch
        : require("node-fetch").default;

    fetch("http://localhost:5000/multi_choice/set/2")
        .then(res => res.json())
        .then(val => {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(val));
        })
        .catch(err => ((res.statusCode = 500), res.end({ err })));
}
