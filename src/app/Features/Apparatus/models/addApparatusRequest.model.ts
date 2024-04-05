export class AddApparatusRequest{
    id: number;
    unitNum: string;
    make: string;
    model: string;
    year: number;
    mileage: number;
    mileageDate?: Date;
    apparatusTypeId: number;
    fuelTypeId: number;
    driveTypeId: number;
    
    constructor(){
        this.id = 0;
        this.unitNum = '';
        this.make = '';
        this.model = '';
        this.year = 0;
        this.mileage = 0;
        this.mileageDate = undefined;
        this.apparatusTypeId = 0;
        this.fuelTypeId = 0;
        this.driveTypeId = 0;
    }
}