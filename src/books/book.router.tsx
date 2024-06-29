import { Hono } from "hono";
import {getAllBooks, getBookN,createBookN,updateBookN,searchBookN,deleteBookN } from "./book.controller";



export const bookRouter = new Hono();

// restraunt table
bookRouter.get("/books", getAllBooks)
bookRouter.get("/book/:id", getBookN)
bookRouter.post("/books", createBookN)
bookRouter.delete("/book/:id",deleteBookN)
bookRouter.put("/book/:id",updateBookN)
bookRouter.get("/book/:id",searchBookN)