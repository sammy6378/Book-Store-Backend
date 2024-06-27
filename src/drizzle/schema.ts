import {serial,pgTable,varchar,integer} from "drizzle-orm/pg-core";

// books table
export const booksTable = pgTable("books", {
    id: serial("id").primaryKey(),
    name: varchar("name"),
    Description: varchar("Description"),
    Author: varchar("Author"),
    Year: integer("Publication Year"),
    Price: integer("Price"),
  });