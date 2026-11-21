const inputBtn = document.querySelector('#input-btn')
const display = document.querySelector('#display')
const input = document.querySelector('#input')

let loading =  false
let myLeads = []


const HoleFucntion = ()=>{
    if(loading) return
    loading = true
    inputBtn.textContent = "Loading ...."
    myLeads.push(input.value.trim())
    setTimeout(()=>{
        console.log(myLeads);
        loading = false
        inputBtn.textContent = "Save Input"
        display.classList.remove('hidden')
        for (let i = 0; i < myLeads.length; i++) {
            display.innerHTML += "<p>" + myLeads[i] + "</p>";
        }
        myLeads = []
        input.value = ""
    },1000)
}

inputBtn.addEventListener('click',HoleFucntion)



