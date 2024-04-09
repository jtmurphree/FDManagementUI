export class User{
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    displayName: string;
    employeeId: string;
    phoneNumber: string;
    email: string;
    passwordHash: string;
    userRoleName: string;
    userRoleId: number;
    dateAdded: Date;
    dateUpdated: Date;

    constructor(){
        this.id = 0
        this.firstName = '';
        this.lastName = '';
        this.userName  = '';
        this.displayName = '';
        this.employeeId = '';
        this.phoneNumber = '';
        this.email= '';
        this.passwordHash = '';
        this.userRoleName = ''
        this.userRoleId = 0;
        this.dateAdded = new Date();
        this.dateUpdated = new Date();
    }
}