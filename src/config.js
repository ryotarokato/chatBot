import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import AdmissionInfo from "./components/AdmissionInfo/AdmissionInfo";
import LinkList from "./components/LinkList/LinkList"
const config = { 
  botName: "Bot",
  initialMessages: [createChatBotMessage("Hi, Welcome! I'm Your Bot. What do you want to Know?",{
     widget: "AdmissionInfo",}),
    ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
        widgetName: "AdmissionInfo",
        widgetFunc: (props) => <AdmissionInfo {...props} />,
    },
{      
    widgetName: "Admissions",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
        options: [
       {
         text: `Your Text`,
         url:"<Your URL Here>",
         id: 2,
       },
       
     ],
},
},

],
}
export default config
