
function formatJson(json) {
    json.forEach(entry => {
        const alternatives = entry.choices;
        delete entry["choices"];
        entry["alternatives"] = alternatives;
    });
    return json;
}

export function get(req, res) {
    const fetch = process.browser
        ? window.fetch
        : require("node-fetch").default;

    fetch("http://localhost:5000/dropdown/set/2")
        .then(res => res.json())
        .then(val => {
            const returnVal = formatJson(val);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(returnVal));
            
        })
        .catch(err => ((res.statusCode = 500), res.end({ err })));
}
