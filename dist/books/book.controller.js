"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBookN = exports.updateBookN = exports.deleteBookN = exports.createBookN = exports.getBookN = exports.getAllBooks = void 0;
const book_service_1 = require("./book.service");
const generic_controller_1 = require("../generics/generic.controller");
// restraunt table
exports.getAllBooks = (0, generic_controller_1.getAllController)(book_service_1.getBooks);
exports.getBookN = (0, generic_controller_1.getController)(book_service_1.getBook);
exports.createBookN = (0, generic_controller_1.createController)(book_service_1.createBook);
exports.deleteBookN = (0, generic_controller_1.deleteController)(book_service_1.getBook, book_service_1.deleteBook);
exports.updateBookN = (0, generic_controller_1.updateController)(book_service_1.getBook, book_service_1.updateBook);
exports.searchBookN = (0, generic_controller_1.searchController)(book_service_1.searchBook);
