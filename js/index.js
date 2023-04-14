const mobileMenuButton = document.getElementById("mobile-menu");
const mobileMenuButtonInnerHTML = document.getElementById("mobile-menu-button");
const header = document.getElementById("header");
const home = document.getElementById("home");
const aTags = document.querySelectorAll(".a-tag-link")

function openClose(){
    mobileMenuButton.style.height =  mobileMenuButton.style.height === "auto"? "0" : "auto";
    mobileMenuButtonInnerHTML.innerHTML =  mobileMenuButton.style.height === "auto"? `<i class="fa-solid fa-xmark"></i>` : `<i class="fa-solid fa-bars"></i>`;
    if(mobileMenuButton.style.height === "auto"){
        header.style.position = "fixed"
        header.style.top = "0"
    }else{
        header.style.position = "relative"
    }
    if(header.style.position === "fixed"){
        home.style.marginTop = "10vh"
    }else{
        home.style.marginTop = "0"
    }
}

aTags.forEach((item)=>{
    item.addEventListener("click", ()=>{
        mobileMenuButton.style.height = "0"
        header.style.position = "relative"
        home.style.marginTop = "0"
        mobileMenuButtonInnerHTML.innerHTML = `<i class="fa-solid fa-bars"></i>`
    })
})

//TELEGRAMGA MALUMOT YUBORISH

var telegram_bot_id = "6112887759:AAHV05d0PhwYX0Eoqe_iYL1wUtIg3aGDenw"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 1882162520; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("fullName").value;
    number = document.getElementById("phoneNumber").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nNumber: " + number + "\nIzoh: " + message;
};
var sendtelegram = function() {

    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("fullName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("message").value = "";
    alert("Your message had sent to developer")
    return false;
};