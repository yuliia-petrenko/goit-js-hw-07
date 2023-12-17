const liItems = document.querySelectorAll('.item');
const numberLi = liItems.length;
console.log('Number of categories:', numberLi.toString());

liItems.forEach(item => {
  const categories = item.firstElementChild.textContent;
  const eltments = item.lastElementChild.children.length;
  console.log('Category:', categories);
  console.log(`Elements:`, eltments);
});
