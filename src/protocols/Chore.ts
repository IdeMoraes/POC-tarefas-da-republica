export type Chore = {
    id?: number,
    name: string,
    description?: string,
    inCharge: string,
    startDate?: Date,
    deadline: string|Date,
    isDone?: boolean,
    doneBy?: string,
    doneOn?: Date
}