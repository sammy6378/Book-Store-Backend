import { getBooks,getBook,searchBook,createBook,deleteBook,updateBook } from "./book.service";
import { getAllController,getController, createController, deleteController, updateController,searchController } from "../generics/generic.controller";

// restraunt table
export const getAllBooks = getAllController(getBooks);
export const getBookN = getController(getBook);
export const createBookN = createController(createBook);
export const deleteBookN = deleteController(getBook, deleteBook);
export const updateBookN = updateController(getBook, updateBook);
export const searchBookN = searchController(searchBook);