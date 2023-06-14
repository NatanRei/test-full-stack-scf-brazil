export class FailedToDeleteError extends Error {
    constructor() {
        super('Failed to delete.')
    }
}