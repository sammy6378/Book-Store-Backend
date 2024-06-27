"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBook = exports.updateBook = exports.deleteBook = exports.createBook = exports.getBook = exports.getBooks = void 0;
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../drizzle/schema");
// get all books
const getBooks = async () => {
    return await db_1.default.query.booksTable.findMany();
};
exports.getBooks = getBooks;
// get a book by id
const getBook = async (id) => {
    return await db_1.default.query.booksTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.booksTable.id, id)
    });
};
exports.getBook = getBook;
// creating a book
const createBook = async (res) => {
    await db_1.default.insert(schema_1.booksTable).values(res);
    return "Book Record created successfully";
};
exports.createBook = createBook;
// deleting a restraunt table
const deleteBook = async (id) => {
    await db_1.default.delete(schema_1.booksTable).where((0, drizzle_orm_1.eq)(schema_1.booksTable.id, id)).returning();
    return true;
};
exports.deleteBook = deleteBook;
//  updating a restaurant
const updateBook = async (id, res) => {
    await db_1.default.update(schema_1.booksTable).set(res).where((0, drizzle_orm_1.eq)(schema_1.booksTable.id, id));
    return "Book record updated successfully";
};
exports.updateBook = updateBook;
// searching method
const searchBook = async (id) => {
    return await db_1.default.query.booksTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.booksTable.id, id)
    });
};
exports.searchBook = searchBook;
