var x = document.getElementById("buton");
var hamberger = document.getElementById("hamberger");
var content = document.getElementById("hambergerMenu-content");
function opend(){
    
    if(hamberger.style.display = "block"){
        content.style.display = "block";
    }
    
    else{
        content.style.display += "none";

    }
    
    x.addEventListener('click',function(){
        if(content.style.display = "block"){
             content.style.display = "none";
        }else{
            content.style.display += "block";
        }
            });
        
}
