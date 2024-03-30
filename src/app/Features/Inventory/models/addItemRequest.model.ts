export class AddItemRequest{
    name: string;
    description: string;
    serialNumber: string;
    categoryID: number;

    constructor(){
        this.name = '';
        this.description = '';
        this.serialNumber = '';
        this.categoryID = 0;
    }
}