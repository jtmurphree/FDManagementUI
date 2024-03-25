export class AddApparatusRequest{
    id: number;
    unitNum: string;
    make: string;
    model: string;
    mileage: number;
    mileageDate?: Date;
    apparatusTypeId: number;
    fueltypeId: number;
    driveTypeId: number;
    
    constructor(){
        this.id = 0;
        this.unitNum = '';
        this.make = '';
        this.model = '';
        this.mileage = 0;
        this.mileageDate = undefined;
        this.apparatusTypeId = 0;
        this.fueltypeId = 0;
        this.driveTypeId = 0;
    }
}