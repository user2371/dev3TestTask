let userTextField = document.getElementById("customInput");


let outputBox = document.getElementById("outputBox")
userTextField.addEventListener("change", function (evt) {
    
    outputBox.innerHTML = userTextField.value
})
