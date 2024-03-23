export class Apparatus{
    id: number;
    unitNum: string;
    make: string;
    model: string;
    mileage: number;
    mileageDate?: Date;
    apparatusTypeId: number;
    apparatusType: string;
    fueltypeId: number;
    fuelType: string
    driveTypeId: number;
    driveType: string;

    constructor(){
        this.id = 0;
        this.unitNum = '';
        this.make = '';
        this.model = '';
        this.mileage = 0;
        this.mileageDate = undefined;
        this.apparatusTypeId = 0;
        this.apparatusType = '';
        this.fueltypeId = 0;
        this.fuelType = '';
        this.driveTypeId = 0;
        this.driveType = '';
    }
}