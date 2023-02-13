const deductBtn=document.querySelector(".minus")
const addBtn=document.querySelector(".addition")
const quantity=document.querySelector(".quantity")

deductBtn.addEventListener("click",increaseQuantity)
function increaseQuantity(){
    let deduction=-1;
    let deductEl=3;
    deductEl +=deduction
    quantity.innerText=deductEl
    console.log(quantity)

}