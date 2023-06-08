const navItems = {
    logoMobile:{
        src:"./images/logo-mobile.svg",
        alt:"logo for mobile"
    },
    logoForDesktop:{
        src:"./images/logo.svg",
        alt:"logo for big screens"
     },
     address:{
         deliverTo: "Deliver to",
         location: "New Delhi",
         locationIcon:{
            src:"./images/location.svg",
            alt:"location icon"
        },
     },
     userIcon:{
        loginAndRegister:"Login & Register",
        icon:{
            src:"images/user.svg",
            alt:"logo icon"
        }
     },
     flagIcon:{
             src: "images/flag.jpg",
             alt:"country flag icon"
     },
     cartIcon:{
         src:"images/cart.svg",
         alt:'cart icon'
     }
}
const {logoMobile:{src:logoForMobile='' ,alt:altForMobile=''},
logoForDesktop: {src:logoForDesktop='',alt:altForDesktop=''},
 address:{deliverTo='',location:city='',locationIcon:{src:locationIconSrc="",alt:locationSrcAlt=''}},
userIcon:{loginAndRegister='',icon:{src:userIconSrc='',alt:userIconAlt=''}},
flagIcon:{src:flagIconSrc='',alt:flagIconAlt=''},
cartIcon:{src:cartIconSrc='',alt:cartIconAlt=''}} = navItems;
const mobileNavbar = () => {
    return `<nav class="mobile-view">
    <div class="nav-container">
        <div class="left-container">
            <i style="margin-right: 10px;" class="fa fa-bars"></i>
           <img src="${logoForMobile}" alt="${altForMobile}" />
        </div>
        <div class="right-container">
            <img class="profile-icon" src="${userIconSrc}" alt="${userIconAlt}" />
            <img class="icons" src="${flagIconSrc}" alt="${flagIconAlt}" />
            <img class="icons" src="${cartIconSrc}" alt="${cartIconAlt}" />
        </div>
    </div>
    <div class="search">
        <input type="text">
        <i class="fa fa-search"></i>
    </div>
    <div class="location">
        <div>
            <img src="${locationIconSrc}" alt="${locationSrcAlt}">
            <p>${deliverTo}: <span>${city}</span></p>
        </div>
    </div>
</nav>`
}

const tabView = () => {
    return `<nav class="tab-view">
    <div class="nav-container">
        <div class="left-container" style="flex: 0.5;">
            <i style="margin-right: 10px;" class="fa fa-bars"></i>
            <img src="${logoForMobile}" alt="logo for tablet" />
        </div>
        <div class="search" style="flex: 2;">
            <input type="text">
            <i class="fa fa-search"></i>
        </div>
        <div class="right-container" style="flex: 0.5;">
            <img class="profile-icon" src="${userIconSrc}" alt="${userIconAlt}" />
            <img class="icons" src="${flagIconSrc}" alt="${flagIconAlt}" />
            <img class="icons" src="${cartIconSrc}" alt="${cartIconAlt}" />
        </div>
    </div>
    <div class="location">
        <div>
            <img src="${locationIconSrc}" alt="${locationSrcAlt}">
            <p>${deliverTo}: <span>${city}</span></p>
        </div>
        <p style="font-weight: 600;">change</p>
    </div>
</nav>`
}

const desktopView = () => {
    return ` <nav class="desktop-view">
    <div class="nav-container">
        <div class="left-container">
            <i style="margin-right: 10px;" class="fa fa-bars"></i>
            <img src="${logoForDesktop}" alt="${altForDesktop}" />
        </div>
        <div class="search">
            <input type="text">
            <i class="fa fa-search"></i>
        </div>
       
        <div class="right-container">
            <div class="location">
                <div>
                    <img src="${locationIconSrc}" alt="${locationSrcAlt}">
                    <p>${deliverTo}: <br/> <span>${city}</span></p>
                </div>
            </div>
        <div>
            <img class="profile-icon" src="${userIconSrc}" alt="${userIconAlt}" />
            <p>${loginAndRegister}</p>
        </div>
            <img class="icons" src="${flagIconSrc}" alt="${flagIconAlt}" />
            <div style="position: relative;">
            <img class="icons" src="${cartIconSrc}" alt="${cartIconAlt}" />
            <div style="position: absolute; right:-10px; top:-5px;width: 20px; height: 20px;border-radius: 50%;background-color: rgb(238, 37, 39);display: flex;justify-content: center;">
                <span style="color: white;" id="cart-count">0</span>
            </div>
        </div>
        </div>
    </div>
</nav>`
}
document.getElementById('mobile-nav').innerHTML = mobileNavbar();
document.getElementById('tab-view').innerHTML = tabView();
document.getElementById('desktop-view').innerHTML = desktopView();