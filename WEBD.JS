let inc=0 
let countL=document.getElementById("count-el")
function increment(){
    inc++
    document.getElementById("count-el").textContent=inc
}
function save(){
    document.getElementById("welEl").textContent+=inc+" ~ " //string over integer
    document.getElementById("count-el").textContent=0
    inc=0
}
