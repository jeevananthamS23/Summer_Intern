// ✅ This function will be called when the button is clicked
function runSelectors() {
  // 1. getElementById
  // 🔍 Purpose: To get a single element by its unique ID
  // 🎯 Why use: Fastest way to access a specific element
  let title = document.getElementById("main-title");
  title.innerText = "Changed using getElementById";

  // 2. getElementsByClassName
  // 🔍 Purpose: To get all elements with a specific class
  // 🎯 Why use: To change multiple elements at once that share the same class
  let paragraphs = document.getElementsByClassName("description");
  paragraphs[0].style.color = "blue";  // First <p>
  paragraphs[1].style.color = "green"; // Second <p>

  // 3. getElementsByTagName
  // 🔍 Purpose: To select all elements by their HTML tag
  // 🎯 Why use: Useful when selecting elements like all <li>, <div>, <p>, etc.
  let listItems = document.getElementsByTagName("li");
  listItems[0].innerText = "Modified by Tag Name";

  // 4. querySelector
  // 🔍 Purpose: Selects the first element that matches a CSS selector
  // 🎯 Why use: More flexible than ID or Class methods. Allows any CSS rule.
  let firstBox = document.querySelector(".box");
  firstBox.classList.add("highlight");  // Adds red color and bold text

  // 5. querySelectorAll
  // 🔍 Purpose: Selects ALL elements that match a CSS selector
  // 🎯 Why use: Works like getElementsByClassName but with CSS rules
  let allBoxes = document.querySelectorAll(".box");
  allBoxes[1].style.backgroundColor = "lightyellow";  // Second box

  // Bonus: More complex selector example
  // Select the first <li> inside <ul>
  let specialItem = document.querySelector("ul > li");
  specialItem.style.fontWeight = "bold";
}







/*
| Feature                | `HTMLCollection`                                                    | `NodeList`                                                      |
| ---------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------- |
| 🏷️ Returned By        | `getElementsByClassName`, `getElementsByTagName`                    | `querySelectorAll`, `childNodes`, `document.querySelectorAll()` |
| 🔄 Live/Static         | ✅ **Live** (auto-updates if DOM changes)                            | ❌ **Static** (does not update after creation)                   |
| 📦 Content             | Only **HTML elements**                                              | Can include **text, comments, and elements**                    |
| 🔁 Looping Support     | ❌ Doesn’t support `.forEach()` (use `for` loop or convert to array) | ✅ Supports `.forEach()`                                         |
| 🔧 Type                | Array-like (but not a real array)                                   | Array-like (also not a real array)                              |
| 📚 Conversion to Array | Use `Array.from()` or `[...collection]`                             | Same                                                            |


*/