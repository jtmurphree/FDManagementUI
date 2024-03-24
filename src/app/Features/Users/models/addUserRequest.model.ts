export class AddUserRequest{
    firstName: string;
    lastName: string;
    displayName: string;
    employeeId: string;
    phoneNumber: string;
    email: string;
    userRoleID: number;

    constructor(){
        this.firstName = '';
        this.lastName = '';
        this.displayName = '';
        this.employeeId = '';
        this.phoneNumber = '';
        this.email = ''
        this.userRoleID = 2;
    }
}