let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        // I think 1 liners looks clearer thancourse version ,
        // i personaly would use switch anyway
        if(e.currentTarget.classList.contains("decrease"))
            count--;
        else if(e.currentTarget.classList.contains("reset"))
            count = 0;
        else if(e.currentTarget.classList.contains("increase"))
            count ++;
        else console.log("btn not registered")

        if(count>0)
            value.style.color="green";
        else if(count<0)
            value.style.color="red";
        else
            value.style.color="grey";
            
        value.textContent = count;
    })
})