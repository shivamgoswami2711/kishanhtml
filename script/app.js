import chat from './chat.js'
import home from './Home.js'
import header from './header.js'

header();

const indexFileRef = document.querySelector('.indexFile')
if(indexFileRef){
    home();
} 
const chatFile = document.querySelector('.chatFile')
if(chatFile){
    chat();
} 




// ##############################################
// show input img 
// ##############################################




