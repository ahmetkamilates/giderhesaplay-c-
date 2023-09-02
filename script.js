const nameInput = document.getElementById("name-input");
const priceInput = document.getElementById("price-input");
const addBtn = document.getElementById("add-btn");
const listArea = document.getElementById("list");
const statusCheckbox = document.getElementById("status-check");
const sumInfo = document.getElementById("sum-info");
const deleteBtn = document.getElementById("delete");
const userInfo = document.getElementById("user-input");
const select = document.getElementById("select");
const editBtn = document.getElementById("edit")

let sum = 0
addBtn.addEventListener("click", addExpense)
listArea.addEventListener("click", handleUpdate)

function addExpense(event) {
    event.preventDefault()

    if (!nameInput.value || !priceInput.value) {
        alert("alanlar boş olamaz")
        return
    }
    const expenseDiv = document.createElement("div")
    expenseDiv.classList.add("expense")
    if (statusCheckbox.checked) {
        expenseDiv.classList.add("paid")
    }
    expenseDiv.innerHTML = `
    <h2 class="name"> ${nameInput.value} </h2>
    <h2 class="price"> ${priceInput.value} </h2>
    <div class="btns"> 
    <i id="edit" class="bi bi-check2-square"></i>
    <i id ="delete" class="bi bi-file-x"></i>
    </div>`
    listArea.appendChild(expenseDiv)
    updateSum(priceInput.value)

    nameInput.value = ""
    priceInput.value = ""
    statusCheckbox.checked = false


}
function updateSum(price) {
    sum += Number(price)
    sumInfo.innerText = sum
}
function handleUpdate(event) {
    const item = event.target

    const parent = item.parentElement.parentElement
    if(item.id = "delete"){
        parent.remove()

        const price = parent.querySelector(".price").textContent
        updateSum(Number(price)*-1)
        }
        if(item.id=="edit"){
            parent.classList.toggle("paid")
        }
}

 function saveUser(event){
    localStorage.setItem("user",event.target.value)
 }
 function getUser(){
    const username = localStorage.getItem("user") || ""

    userInfo.value = username
 }