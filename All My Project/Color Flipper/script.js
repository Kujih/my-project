const colors =["green", "red","rgba(113,122,200)","#f15025"]
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    //get random number beetween 0 -3
    
    const randomNumber = generatedNumber();
    console.log(randomNumber);  

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function generatedNumber(){
    return Math.floor(Math.random() * colors.length);
}