import { showInputImgFile,popupCencel} from './Module.js'


export default function header(){
    // notification
    const Notification =
     `<div class="popup"><div class="notification window">
    <span class="cencel">X</span>
    <h3>Notification</h3> 
    <div class="cardWindow">
        <div class="infocard">
        <div class="NotificationProfilePic"><img src="./profile.jpg" alt=""></div>
        <div class="notificationInfo contact">
            <h3>shivam</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptates.</p>
            <p class="date">12:40 PM</p>
        </div>
        </div>
    </div>
    </div>
    </div>`;
    const popupSection = document.querySelector('.popupSection');
    const bell = document.querySelector('.bell')
    bell.addEventListener('click',e=>{
        popupSection.innerHTML=Notification
        popupCencel(popupSection);
        document.querySelector('nav').classList.remove('active')
        document.querySelector('#hangBurger').classList.remove('active')
    })

    // profile
    const profileTag = `<div class="popup">
    <div class="profilewin window">
        <span class="cencel">X</span>
        <div>
            <div class="profileImgcontainer">
            <div class="circle">
                <img class="profile-pic" src="./profile.jpg">
            </div>
            <div class="p-image">
                <label for="file"><i class="fa fa-camera upload-button"></i></label>
                <input class="file-upload" type="file" id="file" accept="image/*"/>
            </div>
        </div>
        </div>
        <div class="button editDetail">Edit Details</div>
        <div class="profileInfoEdit">
            <div class="name">
                <label for="fullName">Full Name</label><br>
                <input type="text" name="name" id="fullName" autocomplete="off">                    
            </div>

            <div class="email">
                <label for="email">Email</label><br>
                <input type="email" name="email" id="email">                    
            </div>

            <div class="number">
                <label for="mobileNUmber">Mobile number</label><br>
                <input type="text" name="number" id="mobileNumber">                    
            </div>
            <div class="address">
                <label for="address">address</label><br>
                <input type="text" name="address" id="address">                    
            </div>

            <div class="otp">
                <label for="otp">OTP</label><br>
                <input type="text" name="number" id="otp" autocomplete="off">                    
            </div>
            <div class="produceSeed">
                <label for="seed">SEED</label ><br>
                <select name="seed" id="seed" autocomplete="off">
                    <option value="" selected hidden ></option>
                    <option value="makka">makka</option>
                    <option value="makka">makka</option>
                    <option value="makka">makka</option>
                </select>
            </div>
            <div class="button">Change Details</div>
        </div>
    </div>
    </div>`;
    const user = document.querySelector('.user');
    user.addEventListener('click',e=>{
        popupSection.innerHTML=profileTag;
        const file = document.querySelector('#file')
        showInputImgFile(file);
        // clickCloce();
        popupCencel(popupSection);
        document.querySelector('nav').classList.remove('active')
        document.querySelector('#hangBurger').classList.remove('active')
    });

    
     // hangBurger
    const hangBurger = document.querySelector("#hangBurger");
    hangBurger.addEventListener('click',e=>{
        if(e.target.classList=='active'){
            e.target.classList.remove('active')
            document.querySelector('nav').classList.remove('active')
        }
        else{
            e.target.classList.add('active')
            document.querySelector('nav').classList.add('active')
        }
    })


}    
// popup cencel func
