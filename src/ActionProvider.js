class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hello, Greetings from Bot.")
      this.updateChatbotState(greetingMessage)
    }
    noMessage(){
      const noMessage = this.createChatBotMessage("I Can't Understand That")
      this.updateChatbotState(noMessage)
    }
    loveMessage(){
      const greetingMessage = this.createChatBotMessage("Love You Too!")
      this.updateChatbotState(greetingMessage)
    };
    
    handleAdmissionsList = () =>{
        const message = this.createChatBotMessage(
            "Fantastic",
            {
              widget: "Admissions",
            }
          );
      
          this.updateChatbotState(message);
    }

   
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }));
    }
  }
  
  export default ActionProvider
