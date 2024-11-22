let wish;
let destinationforfull;
let full;

onload();

function onload(){
    let wishstr = localStorage.getItem("wish")
    wish = wishstr ? JSON.parse(wishstr) : [];

    let desstr = localStorage.getItem("destinationforfull")
    destinationforfull = desstr ? JSON.parse(desstr) : [];
    console.log(destinationforfull)
    full=destinationforfull[0]


displayhomeElement();
wishcount();}

var isclick=false;



icon.addEventListener("click",()=>{
    let isclick=false;
    var icon=document.querySelector("#icon");
var navig=document.querySelector("#navitem");

    navig.style.right="0px ";
    navig.style.bottom="-450px ";
    navig.style.marginTop="500px ";
    isclick=true;
    if(isclick){
        icon.innerHTML="";
        isclick=false
    }else{
        icon.innerHTML='<i class="fa-solid fa-bars"></i>'
        isclick=true
    
    }
   
    



})


function displayhomeElement(){

let itemscontainerelement = document.querySelector(".destination");
if(!itemscontainerelement){
    return
}
let innerHTML="";

destination.forEach(element => {
    innerHTML += `  
              <div id = "card" onclick="fullview(${element.id})" class="card" style="width: 14rem; backdrop-filter: blur(5px);">
              <a href="fullview.html" style="text-decoration: none;">
                <img src="${element.image}" id="img" class="card-img-top" alt="..."></a>
                <div id="text">
                  <h3 style="font-size: 1.8rem; margin-top: 8px; text-transform: capitalize;">${element.name}</h3>
                  <h4>${element.loc}</h4>
                  <div id="control">

                    <button id="wish" onclick="addTowish(${element.id})" >add to wishlist </button>
                    <i style="color:black" class="fa-regular fa-heart"></i>

                  </div>
                </div>
              </div>
            `
    
});

itemscontainerelement.innerHTML= innerHTML;
}


function addTowish(elementID){
    wish.push(elementID);
    localStorage.setItem('wish',JSON.stringify(wish));
    console.log(elementID);
    wishcount()


}

function wishcount(){
    let wishelement=document.querySelector("#count");
    if(wish.length>0){
    wishelement.innerText=wish.length;
    wishelement.style.visibility="visible"

    }else{
        wishelement.style.visibility="hidden"
    }
}

