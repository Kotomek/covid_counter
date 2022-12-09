let counterEl = document.getElementById("counter");
let count = 0;

function inc(){

    count +=1 ;
    counterEl.innerText = count;

}

function dec(){

    count -=1 ;
    counterEl.innerText = count;

}

function reset(){

    alert("Counter has been reset")
    count = 0;
    counterEl.innerText = count;
    
}