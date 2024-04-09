export  interface UpdateUserRequest {
    firstName: string;
    lastName: string;
    userName: string;
    displayName: string;
    employeeId: string;
    phoneNumber: string;
    email: string;
    userRoleName: string;
    userRoleId: number;
    dateUpdated?: Date;
    dateAdded: Date;
}