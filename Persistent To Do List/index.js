let items = ["hello world","123"]

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items"

function renderItems(){
    itemsDiv.innerHTML = null;

    for (const[idx,item] of Object.entries(items)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item

        const button = document.createElement("button")
        button.textContent = "Delete"
        //JS calls the function immediately when you assign on click function, you must wrap it ina dummy function as seen here
        button.onclick = ()=> removeItem(idx) 
        
        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}

function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items = JSON.parse(oldItems)
    renderItems()
}
function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey,stringItems)
}

function addItem(){
    const value = input.value
    if (!value){
        alert("You cannot add an empty item")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(idx){
    items.splice(idx,1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded",loadItems)
//You don't use loadItems() as it will call the function immediately, keep in mind when calling a function as a parameter of another function