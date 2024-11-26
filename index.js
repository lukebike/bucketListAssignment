//1.
const section = document.querySelector(".list");
const paragraph = document.createElement("p");
paragraph.innerText = "Eat steak";
section.appendChild(paragraph);
//2.
const paragraphTwo = document.createElement("p");
paragraphTwo.innerText = "Visit Iceland";
section.appendChild(paragraphTwo);
paragraphTwo.insertAdjacentElement("beforebegin", paragraph);
//3.
console.log(section.innerHTML);
//4.
let str = "<div>This is a div element as a string</div>";
//5.
// section.innerHTML = str;
//6.
section.prepend(str);
//7.
for (let i = 0; i < 3; i++) {
  const newItem = document.createElement("p");
  newItem.innerText = `Wish #${i + 1} `;
  section.appendChild(newItem);
}
//8. There are 6 items
console.log(section.children);
//9.
const h2 = document.querySelector("h2");
h2.innerText = "Luke's";
//10.
const replacement = document.querySelector("p");
replacement.innerText = "I am a replacement";
section.replaceChild(replacement, paragraph);
//11. Visit Iceland becomes Eat Steak
section.replaceChild(paragraph, paragraphTwo);
//12.
section.removeChild(section.lastElementChild);
