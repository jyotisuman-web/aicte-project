
let inputSearch=document.querySelector(".searchinplutcont")
let recentInput=[]
let formInput1=document.querySelector("inputform")
const listOfRecent1=document.querySelector(".listofRecent")

inputSearch.addEventListener("keydown",() => {
    if (inputSearch.value){
        document.getElementById("a fa-search").style.display="block"
    }
    else{
        document.getElementById("fa fa-search").style.display="none"
    }
})
formInput1.addEventListener("submit",(e)=>{
    e.preventDefault()
    let listOfRecenthtml1=""
    recentInput.unshift(inputSearch.value)
    console.log(recentInput)
    if (recentInput.length>0){
        for (let i=0; i<recentInput.length;i++){
            listOfRecent1+=`
            <div class="listofRecent">
            <p>${recentInput[i]}</p>
            <div>
            `
        }
        listOfRecent1.innerHTML=listOfRecenthtml1
    }
})

//for mobile slideDown
function openNav(){
    document.getElementById("slidedown").style.width="100%";
}
function closeNav(){
    document.getElementById("slidedown").style.width="0%";
}

