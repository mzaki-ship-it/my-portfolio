const display11 = document.getElementById("display11")
const display12 = document.getElementById("display12")
const plusButton = document.getElementById("plus-button")
const plusButton2 = document.getElementById("plus-button2")
const plusButton3 = document.getElementById("plus-button3")
const plusButton4 = document.getElementById("plus-button4")
const plusButton5 = document.getElementById("plus-button5")
const plusButton6 = document.getElementById("plus-button6")
const plusButton7 = document.getElementById("plus-button7")
const plusButton8 = document.getElementById("plus-button8")
const plusButton9 = document.getElementById("plus-button9")
const plusButton10 = document.getElementById("plus-button10")
const plusButton11 = document.getElementById("plus-button11")
const plusButton12 = document.getElementById("plus-button12")

let count = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0
let count6 = 0
let count7 = 0
let count8 = 0
let count9 = 0
let count10 = 0
let count11 = 0
let count12 = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1;
  // count を表示
  display.textContent = count + " like";
}
plusButton2.onclick = function () {
  // count を更新
  count2 += 1
  // count を表示
  display2.textContent = count2 + " like"
}
plusButton3.onclick = function () {
    // count を更新
    count3 += 1;
    // count を表示
    display3.textContent = count3 + " like";
  }
  plusButton4.onclick = function () {
    // count を更新
    count4 += 1;
    // count を表示
    display4.textContent = count4 + " like";
  }
  plusButton5.onclick = function () {
    // count を更新
    count5 += 1;
    // count を表示
    display5.textContent = count5 + " like";
  }
  plusButton6.onclick = function () {
    // count を更新
    count6 += 1;
    // count を表示
    display6.textContent = count6 + " like";
  }
  plusButton7.onclick = function () {
    // count を更新
    count7 += 1;
    // count を表示
    display7.textContent = count7 + " like";
  }
  plusButton8.onclick = function () {
    // count を更新
    count8 += 1;
    // count を表示
    display8.textContent = count8 + " like";
  }
  plusButton9.onclick = function () {
    // count を更新
    count9 += 1;
    // count を表示
    display9.textContent = count9 + " like";
  }
  plusButton10.onclick = function () {
    // count を更新
    count10 += 1;
    // count を表示
    display10.textContent = count10 + " like";
  }
  plusButton11.onclick = function() {
      count11 += 1;
      display11.textContent = count11 + " like";
  }
  plusButton12.onclick = function() {
    count12 += 1;
    display12.textContent = count12 + " like";
  }

