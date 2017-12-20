const Message = require('./message.model');
const ImageMessage = require('./image-message.model');

const fs = require('fs');
const path = require('path');


class MessageService{
	constructor(){
		let resolvePromisse;
		let rejectPromisse;
		const filePath = path.join(__dirname,'messages.json');
		this.messagesPromisse = new Promise((resolve,reject) =>{
			resolvePromisse = resolve;
			rejectPromisse = reject;
		});
		fs.readFile(filePath, {encoding:'utf-8'}, (err,data) => {
			if(err){
				rejectPromisse(err);
			}else{
				const dataArray = JSON.parse(data);
				const dataObjs = dataArray.map( (item) =>{
					return new Message(item.text, item.created);
				});
				resolvePromisse(dataObjs);
			}
			//console.log(data);
		});
	}

	get message(){
		return this.messagesPromisse;
	}
}

const messageService = new MessageService();

messageService.message.then((messages) => {
	console.log(messages);
}).catch((err) =>{
	console.log(err);
} )