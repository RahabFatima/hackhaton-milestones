const button = document.getElementById("toggle-workexpe") as HTMLButtonElement
const expe = document.getElementById("workExperience") as HTMLElement

button.addEventListener("click",()=>{
    if(expe.style.display === "none"){
        expe.style.display = "block"
    } else{
        expe.style.display= "none"
    }
})