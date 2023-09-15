var num=document.querySelectorAll(".drum").length

for(i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var btn=this.innerHTML

     switch(btn){
        case 'f':var audio=new Audio("sounds/tom-1.mp3")
        audio.play();
        console.log("f")
        break;
    
        case 'a':var audio=new Audio("sounds/tom-2.mp3")
        audio.play();
        console.log("a")
        break;
    
        case 'l':var audio=new Audio("sounds/tom-3.mp3")
        audio.play();
        console.log("l")
        break;
        
        case 'h':var audio=new Audio("sounds/tom-4.mp3")
        audio.play();
        console.log("h")
        break;
        
        case 'e':var audio=new Audio("sounds/snare.mp3")
        audio.play();
        console.log("e")
        break;
    
        case 'g':var audio=new Audio("sounds/crash.mp3")
        audio.play();
        console.log("g")
        break;
    
        case 'i':var audio=new Audio("sounds/kick-bass.mp3")
        audio.play();
        console.log("i")
        break;
    
        default:console.log(e.key)
    
        }
    })

}

document.addEventListener("keypress",function(e){
var key=e.key.toLocaleLowerCase()
switch(key){
    case 'f':var audio=new Audio("sounds/tom-1.mp3")
    audio.play();
    console.log("f")
    break;

    case 'a':var audio=new Audio("sounds/tom-2.mp3")
    audio.play();
    console.log("a")
    break;

    case 'l':var audio=new Audio("sounds/tom-3.mp3")
    audio.play();
    console.log("l")
    break;
    
    case 'h':var audio=new Audio("sounds/tom-4.mp3")
    audio.play();
    console.log("h")
    break;
    
    case 'e':var audio=new Audio("sounds/snare.mp3")
    audio.play();
    console.log("e")
    break;

    case 'g':var audio=new Audio("sounds/crash.mp3")
    audio.play();
    console.log("g")
    break;

    case 'i':var audio=new Audio("sounds/kick-bass.mp3")
    audio.play();
    console.log("i")
    break;

    default:console.log(e.key)

    }
}
)