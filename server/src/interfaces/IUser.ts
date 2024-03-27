import IDataOperable from "./IDataOperable";

interface IUser extends IDataOperable {
    id: number;
    fullName: string;
    userName: string;
    email: string;
    password: string;
    newsletter: boolean;
}

export default IUser;