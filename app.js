const esketch = document.querySelector(".eSketchBox")
const range = document.getElementById("range")
const outputs = document.getElementById("outputs")
girdmaker.innerHTML = "";

console.log(range)

range.addEventListener("click", 
    function(){
    girdmaker(range.value)
    outputs.innerText = `${range.value} x ${range.value}`
   
   

})

// 16 x 16 grid test
function girdmaker(rangeData){
    
       // let input = prompt("type number from 1 to 64")
        //let num = parseInt(input)
    console.log(rangeData)
    esketch.style.gridTemplateColumns = `repeat(${rangeData}, 1fr)`;
    esketch.style.gridRow = `repeat(${rangeData}, 1fr)`;

    let loop = rangeData * rangeData   
    let i =  0;
    while(i < loop){
        const newdivs = document.createElement('div');
        
        //test.textContent = `${i}`
        esketch.appendChild(newdivs)
        
        
        
        i= i + 1;
        //console.log(i);
       
    }
   
}

