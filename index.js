import LinkedList from "./LinkedList.js";
import Node from "./Node.js";

const divElement = document.getElementById("content");
const linkedList = new LinkedList();
const buttonElement = document.getElementById("list-button");
const h3Element = document.createElement("h3");
const h3Element1 = document.createElement("h3");
const h3Element2 = document.createElement("h3");
const h3Element3 = document.createElement("h3");
const h3Element4 = document.createElement("h3");
const h3Element5 = document.createElement("h3");
const h3Element6 = document.createElement("h3");

console.log(linkedList.toString());
const node = new Node("Value1");
console.log("linkedList.append(node)");
linkedList.append(node);
console.log(linkedList.toString());
const node2 = new Node("Value2");
console.log("linkedList.append(node2)");
linkedList.append(node2);
console.log(linkedList.toString());
const node3 = new Node("Value3");
console.log("linkedList.append(node3)");
linkedList.append(node3);
console.log(linkedList.toString());
const node0 = new Node("Value0");
console.log("linkedList.prepend(node0)");
linkedList.prepend(node0);
console.log(linkedList.toString());
console.log("if (linkedList.pop())");
if (linkedList.pop()) {
  console.log("Removed");
} else {
  console.log("Something wrong happened");
}
console.log(linkedList.toString());
console.log("linkedList.size()");
h3Element.textContent = `Quantity: ${linkedList.size()}`;
console.log(linkedList.toString());
console.log("linkedList.at(1)");
h3Element1.textContent = `Node in index 1: ${JSON.stringify(linkedList.at(1))}`;
console.log(linkedList.toString());
console.log("linkedList.contains('Value2')");
h3Element2.textContent = `Contain Value2: ${linkedList.contains("Value2")}`;
console.log(linkedList.toString());
console.log("linkedList.find('Value2')");
h3Element3.textContent = `Find Value2: ${linkedList.find("Value2")}`;
console.log(linkedList.toString());
h3Element4.textContent = `Linked List: ${linkedList.toString()}`;
console.log("linkedList.insertAt('Value4',1)");
h3Element5.textContent = `Insert Value4 in index 1: ${linkedList.insertAt(
  "Value4",
  1
)}`;
console.log(linkedList.toString());
console.log("linkedList.removeAt(2)");
h3Element6.textContent = `Remove Value1 in index 2: ${linkedList.removeAt(2)}`;
console.log(linkedList.toString());

divElement.appendChild(h3Element);
divElement.appendChild(h3Element1);
divElement.appendChild(h3Element2);
divElement.appendChild(h3Element3);
divElement.appendChild(h3Element4);
divElement.appendChild(h3Element5);
divElement.appendChild(h3Element6);

buttonElement.addEventListener("click", () => {
  const ulElementOld = document.getElementsByTagName("ul")[0];
  if (ulElementOld) {
    divElement.removeChild(ulElementOld);
  }
  const ulElement = document.createElement("ul");
  divElement.appendChild(ulElement);
  let auxNode = linkedList.linkedList;
  while (auxNode !== null) {
    const l1Element = document.createElement("li");
    l1Element.textContent = auxNode.value;
    ulElement.appendChild(l1Element);
    auxNode = auxNode.nextNode;
  }
});
