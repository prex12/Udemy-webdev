document.firstElementChild
// this prints out the elements conatained in the first elememnt and its children

// passing in properties and methods or functions using DOM to modify the looks of things can also be done for exampke:

document.firstElementChild.querySelector("p");

// selects all paragraph elements conatrined within the html element to be modified in a specific way

// there are functions that ease our accessing of elements in an html doc we can use the following functions

document.getElementsByTagName("a")[2].style.color = red;
// in the above code we see the function containing an 's' at the end of elements, this is because it returns a list/ array of items with elememts with the name tag name in our site.

document.getElementsByClassName("a").style.color = red;

// here the same principle applies. in order for us to modify its property we need to specify which one we wopuld like to affect by giving it an index in square brackets []

document.getElementById;
// here we see that our element doesnt contain an s and that is because like we know ids are unique to html elements

document.querySelector("li");

// with this we can query any type of element in our file. a downside to this is that if you pass in a class that is used in multiple occasions on the site it only returns the first item
// with the list of element

ducument.querySelectorAll("title"); 
// the above on the other hand returns a list of all items with the same class and just like in the getElementsBy...()[2] methods we can specify which one we wish to modify by including the index of the element in the list

document.querySelector("selectorName").classList;
//  the above line of code returns a list of elements with the selector name passed as arg and with is we can use the
// followuing method to either add, remove or toggle classes.
... .classList.add("class");
... .classList.remove("class");
... .classlist.toggle("class");

// the textContent property enables us to be able to change just text content o
// and element

// the innerHtml property allows us to change anything HTML in an elemets in particular

