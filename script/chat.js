export default function chat(){
    // ###################################
        // contactButton
    // ##################################

    const contactAccount = document.querySelector('.contactAccount').classList;

    const contactButton = document.querySelector('.contactButton')
    contactButton.addEventListener('click',e=>{
        if(contactAccount[1]=='active'){
            contactAccount.remove('active')
        }
        else{
            contactAccount.add('active')
        }
    })
    const cencelLeftHeader = document.querySelector('.cencelLeftHeader');
    cencelLeftHeader.addEventListener('click',e=>{
        if(contactAccount[1]=='active'){
            contactAccount.remove('active')
        }
        else{
            contactAccount.add('active')
        }
    })

}