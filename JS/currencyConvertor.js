var usdInput=document.querySelector(".usdAmount");
var inrInput=document.querySelector(".inrAmount");

var usdData=usdInput.value;
var inrData=inrInput.value;
console.log(usdData);
async function usdToInr(){
    // if(usdData!=null && inrData==null){
        var response=await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        var data=response.json();
        console.log(data);
        inrInput.innerHTML=indCo;
// }
}


