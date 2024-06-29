import { Hono } from "hono";
import {getAllBooks, getBookN,createBookN,updateBookN,searchBookN,deleteBookN } from "./book.controller";



export const bookRouter = new Hono();

// restraunt table
bookRouter.get("/api/books", getAllBooks)
bookRouter.get("/api/book/:id", getBookN)
bookRouter.post("/api/books", createBookN)
bookRouter.delete("/api/book/:id",deleteBookN)
bookRouter.put("/api/book/:id",updateBookN)
bookRouter.get("/api/book/:id",searchBookN)