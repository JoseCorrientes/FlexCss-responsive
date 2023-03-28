(function(){

    let mobile=document.getElementById("nav-mobile");
    let menuPC=document.getElementById("nav-pc");
    
    mobile.addEventListener("click", function(){
        menuPC.style.display=menuPC.style.display==="flex"?"none":"flex"
    });

    window.addEventListener("resize", function(){
        let ancho = window.innerWidth;
        if(ancho>768) {
            menuPC.style.display="flex";
        } else {
            menuPC.style.display="none";
        }

        

    });

})();