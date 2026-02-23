## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=> getelementbyId() : selects one element by its id name. And it returns a single element.
getElementByClassName() : selects all elements by a specific class name. It can return multiple elements.
querySelector() : Selects the first element that matches a css selector.
queryselectorAll() : selects all elements that matches a css selector.

So the major difference is getelementbyid() selects one element and outputs only one on the other hand getelementbyclassname() selects multiple elements.



### 2. How do you create and insert a new element into the DOM?
=> <!-- create an element -->
   let newElement = document.createElement("p);

   <!-- insert  -->
   newElement.innerText = "Assignment four";


### 3. What is Event Bubbling? And how does it work?
=> It is a behavior of DOM where an event starts from the target element and then propagates upwards to its parent elements until it reaches the top of the document.
It works such a way like 

### 4. What is Event Delegation in JavaScript? Why is it useful?
=> A technique where to attach a single event listener to a parent element instead of attaching separate listener to multiple child element. 
it is useful because of better performance , works for dynamically added elements and gives us a cleaner code.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
=> preventDefault() : stops the default browser behavior of an element.
stopPropagation() : stop an event from bubbling up the dom tree. It doesn't stop the default browser behavior.
