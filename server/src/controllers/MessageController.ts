import MessageModel from "../models/MessageModel";

class MessageController {
    model: MessageModel

    constructor(){
        this.model = new MessageModel();
    }

    async getAllMessages() {
        return await this.model.read();
    }
}


export default MessageController;