export class User{
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    displayName: string;
    employeeId: string;
    phoneNumber: string;
    email: string;
    userRoleName: string;
    dateAdded: Date;

    constructor(){
        this.id = 0
        this.firstName = '';
        this.lastName = '';
        this.userName  = '';
        this.displayName = '';
        this.employeeId = '';
        this.phoneNumber = '';
        this.email= '';
        this.userRoleName = ''
        this.dateAdded = new Date();
    }
}