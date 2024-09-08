let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let gamebutton =document.querySelector(".newgame");
let msg=document.querySelector("#winner");
let newgameId=document.querySelector("#newgameid")
let messagecontainer=document.querySelector(".msg-container");
let turn0=-true;
const resetfunction=()=>{
    turn0=true;
    enableboxes();
    messagecontainer.classList.add("hide");
}
const gamefunction=()=>{
    turn0=true;
    enableboxes();
    messagecontainer.classList.add("hide");
}
resetBtn.addEventListener("click",resetfunction);
gamebutton.addEventListener("click",resetfunction);
newgameId.addEventListener("click",gamefunction);
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const winfunction=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    messagecontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1!="" && posval2 != "" && posval3!=""){
            if(posval1===posval2  && posval2===posval3){
                winfunction(posval1);
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();

    });
});