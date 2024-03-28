import IDataOperable from "./IDataOperable";

interface IUser extends IDataOperable {
    id: number | undefined;
    fullName: string | undefined;
    userName: string | undefined;
    email: string | undefined;
    password: string | undefined;
    newsletter: boolean | undefined;
    creationDate: Date | undefined;
    pfpUrl?: string | undefined;
    about?: string | undefined;
    status: number | undefined; 
}

export default IUser;