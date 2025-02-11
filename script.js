import {
    saveToLocalStorageByName,
    getLocalStorage,
    removeFromLocalStorage,
  } from "./localStorage.js";

const updateBtn = document.getElementById("updateBtn")
const manageBtn = document.getElementById("manageBtn")
const addBtn = document.getElementById("addBtn")
const updatePopup = document.getElementById("updatePopup")
const managePopup = document.getElementById("managePopup")
const addPopup = document.getElementById("addPopup")
const closeAdd = document.getElementById("closeAdd")
const closeManage = document.getElementById("closeManage")
const closeUpdate = document.getElementById("closeUpdate")
const nameOfExpense = document.getElementById("nameOfExpense")
const amountOfExpense = document.getElementById("amountOfExpense")
const addExpenseBtn = document.getElementById("addExpenseBtn")
const updateBudget = document.getElementById("updateBudget")
const displayBudget = document.getElementById("displayBudget")

updateBudget.addEventListener("keydown",(event) =>{
    if(event.key === "Enter"){
        displayBudget.innerText='';
        const budget = updateBudget.value;
        removeFromLocalStorage("budget");
        updateBudget.value ='';
       displayBudget.innerText = budget;
       

       


        saveToLocalStorageByName("budget", budget)
        // have it display onload

    }
})

addExpenseBtn.addEventListener("click", () =>{
//    saveToLocalStorageByName("expenses", nameOfExpense.value)
//    saveToLocalStorageByName("expenses", amountOfExpense.value)
})

// stack OverFlow helped me figure this out 
document.addEventListener("DOMContentLoaded", ()=>{
    const savedBudget = getLocalStorage("budget"); 
    if (savedBudget) {
        displayBudget.innerText = savedBudget; 
    }
})


updateBtn.addEventListener("click", () =>{
    updatePopup.classList.remove("hidden");
    managePopup.classList.add("hidden")
    addPopup.classList.add("hidden")

});

manageBtn.addEventListener("click", () =>{
    managePopup.classList.remove("hidden");
    addPopup.classList.add("hidden")
    updatePopup.classList.add("hidden")
    console.log(getLocalStorage("budget"))
   
});

addBtn.addEventListener("click", () =>{
    addPopup.classList.remove("hidden");
    managePopup.classList.add("hidden")
    updatePopup.classList.add("hidden")
     
});

closeAdd.addEventListener("click", () =>{
    addPopup.classList.add("hidden")
})
closeManage.addEventListener("click", () =>{
    managePopup.classList.add("hidden")
})
closeUpdate.addEventListener("click", () =>{
    updatePopup.classList.add("hidden")
})