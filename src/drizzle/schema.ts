import {serial,pgTable,varchar,integer} from "drizzle-orm/pg-core";

// books table
export const booksTable = pgTable("books", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  description: varchar("description"), 
  author: varchar("author"), 
  year: integer("year"), 
  price: integer("price"),
});
