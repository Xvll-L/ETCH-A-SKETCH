const esketch = document.querySelector(".eSketchBox")
test.innerHTML = "";


function test(){
    let i =  0;
    while(i < 20){
        const test = document.createElement('div');
        //test.textContent = `${i}`
        esketch.appendChild(test)
        i= i + 1;
        console.log(i);
    }
}

test()