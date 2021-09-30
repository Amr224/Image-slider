/*Endless clicking right or left, smart reset*/
const posbtn = document.querySelector("#inc");
const negbtn = document.querySelector("#dec");
const frame = document.querySelector("#directimg");

var i =0;
var images =[];
images[0] = './images/28.jpg'
images[1] = './images/81.jpg'
images[2] = './images/281.jpg'
frame.src = images[0];
function increase() {
    if(i<images.length-1){
        i++;
        frame.src = images[i]
        console.log(i);
    }
    else{
        i=0;
        frame.src = images[i]
        console.log(i);
    }
}
function decrease(){
    if(i>0){
        i--;
        frame.src=images[i];
        console.log(i);
    }
    else{
        i=images.length-1;
        console.log(i);
        frame.src = images[i]

    }
}
posbtn.addEventListener("click",increase);
negbtn.addEventListener("click",decrease);
/*Endless clicking right or left, smart reset*/
