const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/yui.jpg") {
    myImage.setAttribute("src", "images/yui1.jpg");
  } else {
    myImage.setAttribute("src", "images/yui.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName)
    {
        alert("PLEASE!!!");
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = `This name is cool, ${myName}`;}
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `This name is cool, ${storedName}`;
  }
  myButton.onclick = function () {
    setUserName();
  };
    