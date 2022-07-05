const esketch = document.querySelector(".eSketchBox")
test.innerHTML = "";

// 16 x 16 grid test
function test(){
    
        let input = prompt("type number from 1 to 64")
        let num = parseInt(input)
        console.log(num)
        esketch.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        esketch.style.gridRow = `repeat(${num}, 1fr)`;

        let loop = num * num   
        let i =  0;
        while(i < loop){
            const test = document.createElement('div');
            //test.textContent = `${i}`
            esketch.appendChild(test)
            i= i + 1;
            console.log(i);
            esketch.style.margin = '10px'
    }
}

test()