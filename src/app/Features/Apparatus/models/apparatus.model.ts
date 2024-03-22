export class Apparatus{
    id: number;
    unitNum: string;
    make: string;
    model: string;
    mileage: number;
    mileageDate?: Date;
    apparatusType: number;
    fueltype: number;
    driveType: number;

    constructor(){
        this.id = 0;
        this.unitNum = '';
        this.make = '';
        this.model = '';
        this.mileage = 0;
        this.mileageDate = undefined;
        this.apparatusType = 0;
        this.fueltype = 0;
        this.driveType = 0;
    }
}