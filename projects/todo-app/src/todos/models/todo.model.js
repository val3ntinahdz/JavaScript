// Generate unique id's for each task using the npm library "uuid"
// Check the docs for references: https://www.npmjs.com/package/uuid
import { v4 as uuid } from 'uuid';

export class Todo {
    constructor(description) {
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}