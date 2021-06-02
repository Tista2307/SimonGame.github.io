$(".start").on("click",function(){
let st=true;
generateS(st);
})

function generateS(st){
    let k=0;
    var colors=["red","blue","yellow","green"];
    let save1=[];
    
    makesound1(colors[rand-1]);
    animateit(colors[rand-1]);
    save1.push(colors[rand-1]);
    waitans(save1);
    
    k=k+1;
}
function waitans(save1){
    $(".btn").on("click",function(){
        let c=$(this).attr("id");
        animateit(c);
        
        if(checkS(save1[save1.length-1],c)) {
            makesound1(c);
            }
            else {
                var au=new Audio("sounds/wrong.mp3");
                au.play();
               // $(".start").text("RESTART");
                $("body").addClass("animate2");
                setTimeout(function(){
                    $("body").removeClass("animate2");
                },300);
            
            }

        
        });}

 function checkS(had,now){
                if(had===now) return true;
                else{return false;}
            }

function animateit(idname){
    $("#"+idname).addClass("animate");
    setTimeout(function(){
        $("#"+idname).removeClass("animate");
    },300);
}

function makesound1(c){
    switch(c) {
        
        case "blue":
            var au=new Audio("sounds/blue.mp3");
            au.play();
             break;
        case "yellow":
                var au=new Audio("sounds/yellow.mp3");
                au.play();
                 break;
        case "green":
                 var au=new Audio("sounds/green.mp3");
                 au.play();
                 break;
        case "red":
                 var au=new Audio("sounds/red.mp3");
                 au.play();
                 break;
        default:
        break;
}}