"use strict";
// 1. Select all elements
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// 2. When I submit the form, add a new element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
  // 1. create a new item
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  console.log(item);
  // 2. add that item to the list
  list.appendChild(item);
  // 3. clear input
  input.value = "";
  // 4. setup event listener to delete item whwen clicked
  item.addEventListener("click", () => {
    list.removeChild(item);
  });
});
