export class Item{
    id: number;
    name: string;
    description: string;
    serialNumber: string;
    category: number;

    constructor(){
        this.id = 0;
        this.name = '';
        this.description = '';
        this.serialNumber = '';
        this.category = 0;
    }
}