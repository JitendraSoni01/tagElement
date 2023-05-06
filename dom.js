var itemlist = document.querySelector('#items');
// parentElement //
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentElement.parentElement);

// lastelementchild //
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = 'Hello 4'
// lastchild //
console.log(itemlist.lastChild);

// firstelementchild //
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'Hello 1';
// firstchild
console.log(itemlist.firstChild);

// nextsibling //
console.log(itemlist.nextSibling);

// nextelementsibling //
console.log(itemlist.nextElementSibling)

// previoussibling //
console.log(itemlist.previousSibling);

// previouselementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'grclassNameeen';

// createelement
var newDiv1 = document.createElement('div');
newDiv1.id = 'newDiv1';
newDiv1.className = 'newDiv1';

var newDiv2 = document.createElement('div');
newDiv2.id = 'newDiv2';
newDiv2.className = 'newDiv2';

// setAttribute //
newDiv1.setAttribute('title','New Div1');
newDiv2.setAttribute('title','New Div2');

// createtextnode //
var newDivText1 = document.createTextNode('HEllo word');
var newDivText2 = document.createTextNode('HEllo word');

// appendchild //
newDiv1.appendChild(newDivText1);
newDiv2.appendChild(newDivText2);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

var container1 = document.querySelector('div #main');
var ul = document.querySelector('div ul');

console.log(newDiv1); 
console.log(newDiv2);

container.insertBefore(newDiv1,h1);
container1.insertBefore(newDiv2,ul);