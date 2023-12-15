const liItems = document.querySelectorAll('li.item');
const numberLi = liItems.length;
console.log('Number of categories:', numberLi.toString());

const allCategories = document.querySelectorAll('h2');
allCategories.forEach(function (allCategorie) {
  const categoryListItems =
    allCategorie.parentNode.querySelectorAll('ul li.item ul li');
  const numberAllLi = categoryListItems.length;
  console.log('Category:', allCategorie.textContent);
  console.log('Elements:', numberAllLi.toString());
});
