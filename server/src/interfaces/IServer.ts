import IDataOperable from "./IDataOperable";

interface IServer extends IDataOperable {
    id: number;
    serverName: string;
    defaultChannelId: number;
    creationDate: Date;
    status: number;
}

export default IServer;