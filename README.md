# Technology-Watch-Assignation
![](https://img.shields.io/badge/javaScript-gray?logo=javaScript)
![](https://img.shields.io/badge/HTML-gray?logo=HTML5)
![](https://img.shields.io/badge/Bootstrap_vue-gray?logo=Bootstrap).

## content
* [App](#app)
* [Screenshots](#screenshots)
* [JScode](#JScode)

## App
The aim of this project is to be able to create a list of students in one hand, and in the other hand be able to randomly assign a chosen Topic to a Student who wasn't assigned yet to a Technology Watch. A single page in which we can add both students and Technology Watch.
<br><br>
## Screenshots
![Test Image 4](https://github.com/mowafag-omer/Technology-Watch-Assignation/blob/master/Capture.PNG)
<br><br>
## JScode
- token:
```js
let token = jwt.sign(
  { email: email, name: name, id: id },
  config.secret,
  {
    expiresIn: 86400,
  }
);
```
