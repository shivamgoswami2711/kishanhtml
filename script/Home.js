import {showMultipelInputImg, popupCencel} from './Module.js'


export default function home(){

    const seedformTag = ` 
    <div class="popup">
    <div class="window">
        <span class="cencel">X</span>
        <div class="sellForm">
            <div class="imgGallry">
                <div><label for="seedImg"><i class="fa fa-camera upload-button"></i></label><input class="file-upload" type="file" id="seedImg" accept="image/*" multiple/></div>
                <div class="seedimgGallry"><div><img src="./profile.jpg" alt=""></div>
                    </div>
            </div>
            <div>
                <label for="seed">SEED</label><br>
                <select name="seed" id="seed">
                    <option value="" selected hidden ></option>
                    <option value="makka">makka</option>
                    <option value="makka">makka</option>
                    <option value="makka">makka</option>
                </select>
            </div>
            <div>
                <label for="seed">SEED</label><br>
                <select name="seed" id="seed">
                    <option value="" selected hidden ></option>
                    <option value="makka">makka</option>
                    <option value="makka">makka</option>
                    <option value="makka">makka</option>
                </select>
            </div>
            <div>
                <label for="moisture">Moisture</label><br>
                <input type="number" name="" id="moisture" >
                <input type="range" name="" id="moisturerange" value="0" max="20" required>
            </div>
            <div>
                <label for="fungus">Fungus</label><br>
                <input type="number" name="" id="fungus" >
                <input type="range" name="" id="fungusrange" value="0" max="20" required>
            </div>
            <div class="button">Post</div>
        </div> 
        
    </div>
    </div>`;
    const popupSection = document.querySelector('.popupSection');
    const sellSeed = document.querySelectorAll('.sellSeed');
    sellSeed.forEach(e=>{ 
        e.addEventListener('click',e=>{
            popupSection.innerHTML=seedformTag
            const seedImgRef = document.querySelector('#seedImg');
            showMultipelInputImg(seedImgRef)
            moistureFungusRang();
            popupCencel(popupSection)
        })
    })

    // #####################################
        // filter
    // #####################################

    const leftheader = document.querySelector('.leftheader').classList;

        const filterBtn = document.querySelector('.filterbtn')
        filterBtn.addEventListener('click',e=>{
            if(leftheader[1]=='active'){
                leftheader.remove('active')
            }
            else{
                leftheader.add('active')
            }
        })
       const cencelLeftHeader = document.querySelector('.cencelLeftHeader')
       cencelLeftHeader.addEventListener('click',e=>{
        leftheader.remove('active')
       })


    const moisturerangeFilter = document.querySelector('#moisturerangeFilter')
    moisturerangeFilter.addEventListener('change',e=>{
        document.querySelector('.moistuerValue').innerHTML=e.target.value+'%'
    })
    const fungusrangeFilter = document.querySelector('#fungusrangeFilter')
    fungusrangeFilter.addEventListener('change',e=>{
        document.querySelector('.fungusValue').innerHTML=e.target.value+'%'
    })

    // new price (new post)
    const addPriceTag = `<div class="popup">
    <div class="window">
        <span class="cencel">X</span>
        <div class="sellForm">
            <div>
                <label for="seed">SEED</label><br>
                <select name="seed" id="seed">
                    <option value="" selected hidden ></option>
                    <option value="makka">makka</option>
                    <option value="makka">makka</option>
                    <option value="makka">makka</option>
                </select>
            </div>
            <div>
                <label for="price">Add low and high price</label><br>
                <input type="checkbox" name="priceType" id="priceType">
                <div class="highAndLowPrice none">
                    <label for="price">Lowest Price</label><br>
                    <input type="text" id="lowPrice"> <br>
                    <label for="price">Highest Price</label><br>
                    <input type="text" id="highPrice">
                </div>
            </div>
            <div class="ecjectPrice">
                <label for="price">Price</label><br>
                <input type="text" id="price">
            </div>
            <div>
                <label for="seed">Quality</label><br>
                <select name="seed" id="seed">
                    <option value="" selected hidden ></option>
                    <option value="makka">Low</option>
                    <option value="makka">Midum</option>
                    <option value="makka">Hight</option>
                </select>
            </div>
            <div>
                <label for="moisture">Moisture</label><br>
                <input type="number" name="" id="moisture" >
                <input type="range" name="" id="moisturerange" value="0" max="20" required>
            </div>
            <div>
                <label for="fungus">Fungus</label><br>
                <input type="number" name="" id="fungus" >
                <input type="range" name="" id="fungusrange" value="0" max="20" required>
            </div>
            <div class="button">Post</div>
        </div> 
        
    </div>
    </div>`;
    const newPrice = document.querySelectorAll('.newPrice')
    newPrice.forEach(item=>{
        item.addEventListener('click',e=>{
                popupSection.innerHTML=addPriceTag;
                popupCencel(popupSection);
                moistureFungusRang();
                document.querySelector('#priceType').addEventListener('change',e=>{
                if(!e.target.checked){
                    document.querySelector('.highAndLowPrice').classList.add('none');
                    document.querySelector('.ecjectPrice').classList.remove('none');
                }else{
                    document.querySelector('.highAndLowPrice').classList.remove('none');
                    document.querySelector('.ecjectPrice').classList.add('none');
            }
            })
        })
        
    })
}    
function moistureFungusRang(){
        const fungus = document.querySelector('#fungus');
        const moisture = document.querySelector('#moisture');
        const fungusrange = document.querySelector('#fungusrange');
        const moisturerange = document.querySelector('#moisturerange');

        fungusrange.addEventListener('change', e=>{
            fungus.value=fungusrange.value;
        })
        moisturerange.addEventListener('change', e=>{
            moisture.value=moisturerange.value;
        })

        fungus.addEventListener('change', e=>{
            if (fungus.value>20){
                alert('fungus is very high')
            }else{
                fungusrange.value=fungus.value;
            }
        })
        moisture.addEventListener('change', e=>{
            if (moisture.value>20){
                alert('moisture is very high')
            }else{
                moisturerange.value=moisture.value;
            }
        })
    }