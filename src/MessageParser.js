class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      var lowerCaseMessage = message.toLowerCase().split(" ").join("");
      
      if (lowerCaseMessage.includes("hello")||lowerCaseMessage.includes("hi")||lowerCaseMessage.includes("hey")) {
        this.actionProvider.greet()
      }
      if(lowerCaseMessage.includes("love")){
        this.actionProvider.loveMessage()
      }
      if (lowerCaseMessage ==="") {
        this.actionProvider.noMessage();
      }
      if (lowerCaseMessage.includes("admission")) {
        this.actionProvider.handleAdmissionsList();
      }
     //add more cases here if needed and define functions in ActionProvider.js file
    }

}
  export default MessageParser
