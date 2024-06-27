"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const console_1 = require("console");
const book_router_1 = require("./books/book.router");
const cors_1 = require("hono/cors");
const app = new hono_1.Hono();
app.use('/api/*', (0, cors_1.cors)());
app.get('/', (c) => {
    return c.text('Hello Hono!');
});
app.route('/', book_router_1.bookRouter);
(0, console_1.assert)(process.env.PORT, 'PORT is not defined');
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT)
});
console.log(`Server is running on port ${process.env.PORT}`);
