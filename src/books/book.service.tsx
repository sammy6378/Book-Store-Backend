
import db from '../drizzle/db'
import { eq } from "drizzle-orm";
import { booksTable } from '../drizzle/schema';

// get all books

export const getBooks = async () => {
    return await db.query.booksTable.findMany()
}

// get a book by id
export const getBook = async (id: number) => {
    return await db.query.booksTable.findFirst({
        where: eq(booksTable.id, id)
    })
}

// creating a book
export const createBook = async (res:any)=> {
     await db.insert(booksTable).values(res)
        return "Book Record created successfully"
}

// deleting a restraunt table
export const deleteBook = async (id:number):Promise<boolean>=>{
    await db.delete(booksTable).where(eq(booksTable.id,id)).returning()
    return true
 }

//  updating a restaurant
export const updateBook = async(id: number, res: any): Promise<string | undefined>=> {
    await db.update(booksTable).set(res).where(eq(booksTable.id, id))
    return "Book record updated successfully";
}

// searching method
export const searchBook = async (id:number) => {
    return await db.query.booksTable.findFirst({
        where: eq(booksTable.id, id)
    })
}
