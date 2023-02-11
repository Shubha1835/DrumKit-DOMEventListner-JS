// document.querySelector(".w ").addEventListener("click",handleClick);
// document.querySelector(".a").addEventListener("click",handleClick);
// document.querySelector(".s").addEventListener("click",handleClick);
// document.querySelector(".d").addEventListener("click",handleClick);
// document.querySelector(".j").addEventListener("click",handleClick);
// document.querySelector(".k").addEventListener("click",handleClick);
// document.querySelector(".l").addEventListener("click",handleClick);


//getting the total number of components having class drum
var buttonNumber= document.querySelectorAll(".drum").length;

// for(var i=0;i<buttonNumber;i++){
//     //putting alert on each component having class drum
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         alert("I am pressed");

//     })
// }

// for(var i=0;i<buttonNumber;i++){
//     //Make the each button color while on being clicked 
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         this.style.color="white";
//     ;

//     })
// }

for(var i=0;i<buttonNumber;i++){
    //button sounds  on being clicked 
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimations(buttonInnerHTML);
         
        // switch(buttonInnerHTML){
        //     case "w":
        //            var audio=new Audio("sounds/crash.mp3");
        //             audio.play();
        //             break;
            
        //     case "a":
        //             var audio=new Audio("sounds/kick-bass.mp3");
        //             audio.play();
        //             break;
            
        //     case "s":
        //             var audio=new Audio("sounds/snare.mp3");
        //             audio.play();
        //             break;
            
        //     case "d":
        //             var audio=new Audio("sounds/tom-1.mp3");
        //             audio.play();
        //             break;

        //     case "j":
        //             var audio=new Audio("sounds/tom-2.mp3");
        //             audio.play();
        //             break;

        //     case "k":
        //             var audio=new Audio("sounds/tom-3.mp3");
        //             audio.play();
        //             break;

        //     case "l":
        //             var audio=new Audio("sounds/tom-4.mp3");
        //             audio.play();
        //             break;
            
        //     default:

        // }
    

    })
}

//Add Keyboard key pressed event Listener 
document.addEventListener("keydown",(event)=>{
    var keyName=event.key;
    makeSound(keyName);
    addAnimations(keyName);

}
);




 function makeSound(keyName){
    //button sounds  on keyboard pressed     
        switch(keyName){
            case "w":
                   var audio=new Audio("sounds/crash.mp3");
                    audio.play();
                    break;
            
            case "a":
                    var audio=new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;
            
            case "s":
                    var audio=new Audio("sounds/snare.mp3");
                    audio.play();
                    break;
            
            case "d":
                    var audio=new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;

            case "j":
                    var audio=new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;

            case "k":
                    var audio=new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;

            case "l":
                    var audio=new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;
            
            default:

        }
    

    
}

function addAnimations(keyName){
    var activeButton = document.querySelector("."+keyName);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")

    },100)

}

