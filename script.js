const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-item-container");
const sign=document.querySelector(".user-sign-in");

/* buton */ 

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const signBtn = document.querySelector("#sign-btn");

searchBtn.addEventListener("click",function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)){
            searchForm.classList.remove("active");
        }
    })
});

cartBtn.addEventListener("click",function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem)){
            cartItem.classList.remove("active");
        }
    })
});

signBtn.addEventListener("click",function(){
    sign.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(signBtn) && !e.composedPath().includes(sign)){
            sign.classList.remove("active");
        }
    })
});