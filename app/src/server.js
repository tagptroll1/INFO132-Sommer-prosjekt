import sirv from "sirv";
import compression from "compression";
import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app = express();

const sess = {
    secret: "super-random-secret-here",
    cookie: {
        maxAxe: 31536000,
    },
    resave: false,
    saveUninitialized: true,
};

if (app.get("env") === "production") {
    sess.cookie.secure = true;
}

app.use(bodyParser.json())
    .use(session(sess))
    .use(
        compression({ threshold: 0 }),
        sirv("static", { dev }),
        sapper.middleware({})
    )
    .listen(PORT, err => {
        if (err) console.log("error", err);
    });
