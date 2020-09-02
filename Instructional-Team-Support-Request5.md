Name: Instructional Team Support Request
about: This is a template to request support from the instructional team.
title: Request for Instructor Assistance
labels: help wanted
assignees: ''

---

### Description of Issue

I am trying to implement a feature for edit. I have begun code on a Modal and conditional render component to provide the user with a place to edit their todo list. 

For the Modal- in the components view on my dev tools, I can see that both components have the functions I need, props, todos and that specific todo. But I can't call anything I've passed over. I can't get to the part when I would need to click to see if it open so I'm guessing it won't. 

For the conditional render button component, I have access to everything. When I press the button- it renders (but I can't call the text to fill in the value for the input field), fill in new information and press save, the new text shows on the page, but it does not take the id of this specific todo.

I need helping one or the other to work. If neither will, help me come to terms with losing this coolness. Thank you!

### Error messages || Screen Shots
Conditional Render

![Button 1](/images/Button1ScreenShot2020-08-26.png)

![Button 2](./images/Button2ScreenShot2020-08-26.png)

![Button Dev Tools](./images/ButtonScreenShot2020-08-26.png)

![Button Error](./images/ButtonErrorScreenShot2020-08-26.png)

![Modal Error](./images/ModalErrorScreenShot2020-08-26.png)

![Modal Dev Tools](./images/ModalDevToolsScreenShot2020-08-26.png)


### Steps Attempted to Resolve Issue

I have read documentation for both. 

* Conditional Render

I have gone to TA hours, and checked several stackoverflow.

I have tried to see if I'm just calling the information wrong, but when I do console.logs on the page, for {this.props.todos}, just the basic info not the specific, it comes back undefined. I've put console.logs at the controller, todoservice and in the edit function. The function and todoservice come back undefined. 

* Modal

I have searched every aspect of Bootstrap Modals in the documentation and every site I can find, but I don't think it's that, I think it's a passing info on an component that appears inside an array. And I've search everything I can find about that issue as well.
Is a route thing?


### Research
Conditional Render
-https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
https://stackoverflow.com/questions/57490141/react-js-parsing-error-unexpected-token-expected



Modal
-https://react-bootstrap.github.io/components/modal/
https://stackoverflow.com/questions/28241912/bootstrap-modal-in-react-js
https://www.pluralsight.com/guides/working-with-react-bootstrap-buttons

Passing

-https://stackoverflow.com/questions/42858542/react-this-props-is-undefined
https://stackoverflow.com/questions/50053279/react-passing-props-from-array-to-div
https://stackoverflow.com/questions/58277398/react-mapped-array-not-passing-props-correctly-to-child-component

* Might be the answer, but I tried what I understood and it is still giving the same error
