"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
// books table
exports.booksTable = (0, pg_core_1.pgTable)("books", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name"),
    Description: (0, pg_core_1.varchar)("Description"),
    Author: (0, pg_core_1.varchar)("Author"),
    'Publication Year': (0, pg_core_1.integer)("Publication Year"),
    Price: (0, pg_core_1.integer)("Price"),
});
