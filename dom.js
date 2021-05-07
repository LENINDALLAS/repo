/* querySelector() 
It is a new method to manipulate the DOM like getelementbyid
The queryselector allows to acces the block by their css class or Id */ 

var nam = document.querySelector('div');
nam.style.display= 'red';


/* querySelectorAll()
It is used to select all the class or id and tag elements and 
display for all the instance they are used, It is used to select 
a group of paragraph for example.
*/

var nam = document.querySelectorAll('p');
nam.style.display= 'green';

/* addEventListener()
It is used to execute a function when a event happens like(click, input) 
you can even execute p mentioned inside a div, where both are event listeners 
by bubbling and capturing method */

var nam = document.querySelector('p');
nam.addEventListener('click', myFunction(), false)

/* removeEventListener() 
It removes the event listener previously added 
There is only one change which is once cannot be used here */
 
nam.removeEventListener('click', myFunction(), false)

/* createElement() 
This method creates a HTML element using a HTML tag */

var nam = document.createElement('strong');

/* appendChild()
This method is used to push the element created by createElement() method into the HTML page */

div.appendChild(nam)

/* removeChild()
Removes the child element which was appended before */

div.removeChild(nam)

/* replaceChild() 
In replace child first an element is created next a element is selected then the div is selected
next using the div the replace is done by replacing the created with the called element */

div.replacechild(strong, nam )

/* cloneNode()  
The clone method creates a copy of the element mentioned 
If true is mentioned at the syntax then has the properties of the copied elements parents */

var num = strong.cloneNode(true);

/* InsertBefore 
This takes the  elements of createElement and a present element and the parent element of the present element
then the parent element is specified and then the element to be placed is specified and then the before element 
where the createElement should be placed before this element is specified */
  
div.insertBefore(tee , nam);

/* createDocumentFragment()
This method is used to create contents to be displayed in the DOM without disturbing the structure 
it is done by creating a fragment in the html , It can be used by creating the element in js and append them to HTML. 
The below example creates 5 rows with 1 to 5 named on it */

var table = document.querySelector("table");
var df = document.createDocumentFragment();
 
for(var i=0; i<5; i++) {
  var td = document.createElement("td");
  var tr = document.createElement("tr");
  td.textContent = i;
  tr.appendChild(td)
  df.appendChild(tr);
}
 
table.appendChild(df);

/* getComputedStyle() 
It is used to get the read only property of the css element selected.
In the below example a div 's computed style is got in the read only format */


var style = getComputedStyle(document.querySelector('div'));
alert(style.width);


 /* setAttrbute()
 The setAttribute method adds a new or already available HTML attribute to the selected element.
 In the below example the content of the div is set to editable format using contenteditable
 The value goes in the empty space*/

 var div = document.querySelector('div');
div.setAttribute('contenteditable', '')

/* getAttribute
This is used to get  the attribute value of the selected attribute 
In the below example the contenteditable attribute of div is selected and an alert is created*/
var div = document.querySelector('div');
alert(div.getAttribute('contenteditable'))

/* removeAttribute()
The removeAttribute is used to remove the attribute value specified to it 
In the below example the attribute contenteditable is removed from the div element */


div.removeAttribute('contenteditable');