const itemRef = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${itemRef.length}\n\n`);

itemRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);

  console.log(`Elements: ${item.lastElementChild.children.length}\n\n`);
});
