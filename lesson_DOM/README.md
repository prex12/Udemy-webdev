# DOM- the Document object model is a js way of tapping into elements of a site. The model presents the content of the site in form of a tree

## take for example we have a webpage with the html tag, the head and body elements inside, we can access the body elementing the below code:

var body = document.firstElementChild.lastElementChild;

### the document keyword here taps into the html file i.e. if we type only the document keyword we'd get the content of the whole page but we have gone a little further to get into the children of the html tag.

#### the DOM also lets us to modify objects or set behaviours of objects using the METHODS or PROPERTIES. Illustration

document.firstElementChild.lastElementChild.style = "background-color: red";
the above one is for properties of objects

document.firstElementChild.lastElementChild.click();
this one is for functions / methods