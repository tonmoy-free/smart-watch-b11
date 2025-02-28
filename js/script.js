const ringButton = document.querySelectorAll(".ring-button");

for(let i=0; i<ringButton.length; i++){
 //   console.log(ringButton[i]);
    const ringBtn = ringButton[i];
    ringBtn.addEventListener("click",function(event){
        const color = event.target.id;
        const colorReplace = color.replace("-color","");       
        // console.log(event.target);
        for(let j=0; j<ringButton.length; j++){
            ringButton[j].classList.remove("border-purple-600");
            ringButton[j].classList.add("border-gray-300");
        }
        event.target.classList.add("border-purple-600");
        ringButton[i].classList.remove("border-gray-300");

        const productImage = document.getElementById("product-image");
        productImage.src = "../images/"+ colorReplace+".png";
    })
}

function selectWristSize(size){
    const sizes = ["S","M","L","XL"];
    
    for(let i=0; i<sizes.length; i++){
        const button = document.getElementById("size-"+sizes[i]);
        const element = sizes[i];

        if(element === size){
            button.classList.add("border-purple-600");
        }else{
            button.classList.remove("border-purple-600");
        }
        
    }
}

const quantityElements = document.querySelectorAll(".quantity-button");
for(let btn of quantityElements){
    btn.addEventListener("click",function(event){
        const amount = event.target.innerText === "+"? 1 : -1;
        const quantityElement = document.getElementById("quantity");
        const quantity =parseInt(quantityElement.innerText);
        const newQuantity = Math.max(0,quantity+amount);
        quantityElement.innerText = newQuantity;
        console.log(quantityElement.innerText);
    })
}