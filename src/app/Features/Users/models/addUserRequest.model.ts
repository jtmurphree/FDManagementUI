export class AddUserRequest{
    firstName: string;
    lastName: string;
    userName:  string;
    displayName: string;
    passwordHash: string;
    employeeId: string;
    phoneNumber: string;
    email: string;
    userRoleID: number;
    dateAdded: Date;
    dateUpdated?: Date;

    constructor(){
        this.firstName = '';
        this.lastName = '';
        this.userName = '';
        this.displayName = '';
        this.passwordHash = '';
        this.employeeId = '';
        this.phoneNumber = '';
        this.email = ''
        this.userRoleID = 2;
        this.dateAdded = new Date();
    }
}