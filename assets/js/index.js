//SLIDEBAR
const menuItems=document.querySelectorAll('.menu-item')
//MESSAGES
const messagesNotification =document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = messages.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme')
const themeModal= document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');
const colorPalette =document.querySelectorAll('.choose-color span')
var Bg1 = document.querySelector('.bg-1');
var Bg2 = document.querySelector('.bg-2');
var Bg3 = document.querySelector('.bg-3');

//REmove active class for all menu item


const changeActiveItem =()=>{
    menuItems.forEach(item =>{
        item.classList.remove('active')
    })
}
menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notification'){
            document.querySelector('.notification-popup').style.display = 'none'
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block ';
            document.querySelector('#notification .notification-count').style.display ='none';


        }
    })
})

/////===========Messages//////////////////////////

//searchs chats
const searchMessage = ()=>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat=>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) !=-1){
            chat.style.display='flex';
        }
        else{
            chat.style.display='none'
        }

    })
}



//search chat
messageSearch.addEventListener('keyup',searchMessage)




//Nightlight messages card when no fullscreenerror
messagesNotification.addEventListener('click',() =>{

    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none'
    setTimeout(()=>{
        messages.style.boxShadow ='none'
    },2000)

})
//The;e/Display Customisation
//opens Modal
const openThemeModal =()=>{
    themeModal.style.display='grid'
}

//closes modal
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none'
    }
}



//close modal
themeModal.addEventListener('click',closeThemeModal);


theme.addEventListener('click',openThemeModal);
//remove active class from spans or font size selactors
const removeSizeSelector = ()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active')
    })
}

//-------------FONT SIZE------
fontSizes.forEach(size=>{
   

    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperty('  --sticky-top-left ','5.4rem')
            root.style.setProperty('  --sticky-top-right ','5.4rem')
        } else if (size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty('  --sticky-top-left ','5.4rem')
            root.style.setProperty('  --sticky-top-right ','.7rem')
        }
        else if (size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('  --sticky-top-left ','-2rem')
            root.style.setProperty('  --sticky-top-right ','-17rem')
        }
        else if (size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('  --sticky-top-left ','-5rem')
            root.style.setProperty('  --sticky-top-right ','-25rem')
        }
        else if (size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty('  --sticky-top-left ','-12rem')
            root.style.setProperty('  --sticky-top-right ','-35rem')
        }
        // change font size of the root html element
 document.querySelector('html').style.fontSize=fontSize;
    })
    
 
})

//remore active class for colors
const changeActiveColorClass =()=>{
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}
//change colors
colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primary;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryColorHue= 252;
        } else if (color.classList.contains('color-2')){
           primaryColorHue= 52;

        }else if (color.classList.contains('color-3')){
         primaryColorHue= 352;

        }else if (color.classList.contains('color-4')){
            primaryColorHue= 152;

      

        }else if (color.classList.contains('color-5')){
            primaryColorHue= 202;}
            color.classList.add('.active');
        
        root.style.setProperty('--primary-color-hue',primaryColorHue);
    })
})
//these background values
let darkColorLightness;
let whiteColorLightness;
let lightColorLightness;
//changes background color
const changeBG =()=>{
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);

}




Bg1.addEventListener('click',()=>{


    //add active class
Bg1.classList.add('.active')
//remove active class from the others
Bg2.classList.remove('active')
Bg3.classList.remove('active');
//remove customized changes from local storage
window.location.reload();

});
Bg2.addEventListener('click',()=>{

    darkColorLightness='95%';
   lightColorLightness='15%';
    whiteColorLightness='20%';
    //add active class
Bg2.classList.add('.active')
//remove active class from the others
Bg1.classList.remove('active')
Bg3.classList.remove('active');

;changeBG()

});



Bg3.addEventListener('click',()=>{

    darkColorLightness='95%';
   lightColorLightness='0%';
    whiteColorLightness='10%';
    //add active class
Bg3.classList.add('.active')
//remove active class from the others
Bg1.classList.remove('active')
Bg2.classList.remove('active');

;changeBG()

});


//END
