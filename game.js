var colors= ["red", "blue", "green", "yellow"];
var gamepat=[]
var userpat=[]
function nextseq(){
    let rand=Math.floor(Math.random()*(5-1))+1;
    let chosencol=colors[rand-1];
    gamepat.push(chosencol);
    makesound1(chosencol);
    animateit(chosencol);
    level=level+1;
    $("h1").html("Level "+Number(level));
}
function makesound1(c){
    let s="sounds/"+c+".mp3"
    var au=new Audio(s);
    au.play();
}
function animateit(idname){
    $("#"+idname).addClass("animate");
    setTimeout(function(){
        $("#"+idname).removeClass("animate");
    },300);
}

$(".btn").on("click",function(){
        let uchosencolor=$(this).attr("id");
        animateit(uchosencolor);
        userpat.push(uchosencolor);
       // console.log(userpat);
        makesound1(uchosencolor);
        checkAns(userpat.length-1);
 })
 var level=0;
 $(".start").on("click",function(){ 
    $(".start").addClass("hide");
   nextseq();
   
})
function checkAns(curr){
if(userpat[curr]===gamepat[curr]){
    if(userpat.length===gamepat.length){
        userpat=[]
        setTimeout(function(){
            nextseq();
        },700)
    }

}
else{
    var au=new Audio("sounds/wrong.mp3");
    au.play();
    $("h1").html("GAME OVER😭!!! PRESS START TO RESTART! SCORE: "+(level*5)+"🥳"); 
    $(".start").removeClass("hide");
    gamepat=[]
    userpat=[] 
    level=0         
    // $(".start").text("RESTART");
   $("body").addClass("animate2");
    setTimeout(function(){
     $("body").removeClass("animate2");
    },300);
}
}
