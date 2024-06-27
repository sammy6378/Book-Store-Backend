"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchController = exports.updateController = exports.deleteController = exports.createController = exports.getController = exports.getAllController = void 0;
const gen_func_1 = require("./gen.func");
// Controller to get all entities
const getAllController = (getFunction) => async (c) => {
    try {
        const entities = await (0, gen_func_1.getAllEntity)(getFunction);
        if (entities === undefined) {
            return c.text("Entities not found", 404);
        }
        return c.json(entities);
    }
    catch (error) {
        console.error("Error fetching entities:", error);
        return c.text("Internal Server Error", 500);
    }
};
exports.getAllController = getAllController;
// get a controller
const getController = (getFunction) => async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const entity = await (0, gen_func_1.getEntity)(id, getFunction);
    if (entity === undefined) {
        return c.text("Entity not found", 404);
    }
    return c.json(entity, 200);
};
exports.getController = getController;
// create a new controller
const createController = (createFunction) => async (c) => {
    try {
        const data = await c.req.json();
        const createdEntity = await (0, gen_func_1.createEntity)(data, createFunction);
        if (!createdEntity)
            return c.text("Entity not created", 404);
        return c.json({ msg: createdEntity }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createController = createController;
// delete controller
const deleteController = (getFunction, deleteFunction) => async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        const entity = await (0, gen_func_1.getEntity)(id, getFunction);
        if (entity === undefined)
            return c.text("Entity not found", 404);
        const deleted = await (0, gen_func_1.deleteEntity)(id, deleteFunction);
        if (!deleted)
            return c.text("Entity not deleted", 404);
        return c.json({ msg: entity }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteController = deleteController;
// update controller
const updateController = (getFunction, updateFunction) => async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const data = await c.req.json();
    try {
        const entity = await (0, gen_func_1.getEntity)(id, getFunction);
        if (entity === undefined)
            return c.text("Entity not found", 404);
        const updatedEntity = await (0, gen_func_1.updateEntity)(id, data, updateFunction);
        if (!updatedEntity)
            return c.text("Entity not updated", 404);
        return c.json({ msg: updatedEntity }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateController = updateController;
// search a controller
const searchController = (getFunction) => async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const entity = await (0, gen_func_1.searchEntity)(id, getFunction);
    if (entity === undefined) {
        return c.text("Entity not found", 404);
    }
    return c.json(entity, 200);
};
exports.searchController = searchController;
