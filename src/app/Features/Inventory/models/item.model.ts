export class Item{
    id: number;
    name: string;
    description: string;
    serialNumber: string;
    categoryID: number;
    categoryName: string;

    constructor(){
        this.id = 0;
        this.name = '';
        this.description = '';
        this.serialNumber = '';
        this.categoryID = 0;
        this.categoryName = ''
    }
}