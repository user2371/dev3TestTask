let container = document.getElementById("container");

let userTextField = document.getElementById("customInput");

let outputDivBox = document.getElementById("outputDivBox")
let outputBox = document.getElementById("outputBox")
let formButton = document.getElementById("formButton")
let mainForm = document.getElementById("mainForm")

let userTextFieldArray
userTextField.addEventListener("change", function (evt) {
    userTextFieldArray = userTextField.value.split("")

})

mainForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // очистка контейнера
  outputBox.innerHTML = "";

  // створення літер
  userTextFieldArray.forEach(letter => {
    let div = document.createElement("div");
    div.textContent = letter;
    div.classList.add("singleLetterDiv");

    // обробник одразу на кожну літеру
    div.addEventListener("click", (event) => {
      if (event.ctrlKey) {
        div.classList.toggle("selected");
      } else {
        document.querySelectorAll(".singleLetterDiv")
          .forEach(el => el.classList.remove("selected"));
        div.classList.add("selected");
      }
    });

    outputBox.append(div);
  });
});








const items = document.querySelectorAll(".item");

items.forEach(item => {

    item.addEventListener("click", (event) => {
        if (event.ctrlKey) {
            // При Ctrl просто переключаем выделение
            item.classList.toggle("selected");
        } else {
            // Без Ctrl — снимаем выделение со всех и выделяем только один
            items.forEach(el => el.classList.remove("selected"));
            item.classList.add("selected");
        }
    });
});

//  Тестове завдання передбачає створення сторінки з текстовим полем та кнопкою,
//  де користувач вводить рядок, а потім відображає його під формою.
//  Реалізується можливість виділення окремих символів або групи літер
//  (через клік із Ctrl або виділяючий прямокутник) зі зміною їхнього кольору.
//  Виділені символи можна перетягувати в будь-яке місце рядка або по всьому документу.
//  При переміщенні однієї літери на місце іншої вони міняються місцями, виключаючи накладання.
//  Використання готових бібліотек заборонено — лише чистий JavaScript і CSS.