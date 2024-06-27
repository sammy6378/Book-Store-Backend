"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const hono_1 = require("hono");
const book_controller_1 = require("./book.controller");
exports.bookRouter = new hono_1.Hono();
// restraunt table
exports.bookRouter.get("/books", book_controller_1.getAllBooks);
exports.bookRouter.get("/book/:id", book_controller_1.getBookN);
exports.bookRouter.post("/book", book_controller_1.createBookN);
exports.bookRouter.delete("/book/:id", book_controller_1.deleteBookN);
exports.bookRouter.put("/book/:id", book_controller_1.updateBookN);
exports.bookRouter.get("/book/:id", book_controller_1.searchBookN);
