// ##########
// main
// ##########

export default function main(){
    
}



// ##############################################
    // one input img show 
// ##############################################

export function showInputImgFile(ref){
    ref.addEventListener("change",e=>{
        // file data 
        const Cfile = ref.files[0];
        // file is not null 
        if(Cfile){
        // obj in File reader
            const filereader = new FileReader();
            // file is lode event 
            filereader.addEventListener('load', e=>{
                // set img
                document.querySelector('.profile-pic').src=e.target.result;
            })
            // file data to read
            filereader.readAsDataURL(Cfile)
        }
    })
}


// ##############################################
    // multipel input img show 
// ##############################################

export function showMultipelInputImg(seedImgRef){
        seedImgRef.addEventListener('change',e=>{
        const ref = seedImgRef.files
        
        const gallryRef =  document.querySelector('.seedimgGallry');

        // clear demo img 
        gallryRef.innerHTML=''

        for(let index=0;index<ref.length;index++){

            const seedImg = ref[index];
            // file is not null 
            if(seedImg){
            // obj in File reader
                const filereader = new FileReader();
                // file is lode event 
                filereader.addEventListener('load', e=>{
                    // set img
                    const img = document.createElement('img')
                    const div = document.createElement('div')
                    img.setAttribute('src',e.target.result);
                    gallryRef.append(div)
                    div.append(img)
                })
                // file data to read
                filereader.readAsDataURL(seedImg)
            }
        }
    })
}


// ############################################
    //  Notification
// ############################################

// cencel pupop
export function popupCencel(popupSection){
    const cencel = document.querySelector('.cencel');
    cencel.addEventListener('click',e=>{
    popupSection.innerHTML='';
});
}