export interface IEmployee {
    id?: number;
    name?: string;
    addr?: string;
    contactNumber?: number;
}

export class Employee implements IEmployee {
    constructor(public id?: number, public name?: string, public addr?: string, public contactNumber?: number) {}
}
