let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#af0808";

// 1- Mahsulot
let count_1 = 0;
let count1 = document.getElementById("count1");
let addbtn1 = document.getElementById("addbtn1");
let rbtn1 = document.getElementById("rbtn1");

addbtn1.addEventListener("click", function (){
    count_1++;
    count1.innerText = count_1;
    tg.MainButton.setText("To'lov");
    tg.MainButton.show();
});

rbtn1.addEventListener("click", function (){
    if (count_1 > 0) {
        count_1--;
        count1.innerText = count_1;
    }
    if (count_1 === 0) {
        tg.MainButton.hide();
    }
});

// 2- Mahsulot
let count_2 = 0;
let count2 = document.getElementById("count2");
let addbtn2 = document.getElementById("addbtn2");
let rbtn2 = document.getElementById("rbtn2");

addbtn2.addEventListener("click", function (){
    count_2++;
    count2.innerText = count_2;
    tg.MainButton.setText("To'lov");
    tg.MainButton.show();
});

rbtn2.addEventListener("click", function (){
    if (count_2 > 0) {
        count_2--;
        count2.innerText = count_2;
    }
    if (count_2 === 0) {
        tg.MainButton.hide();
    }
});

// 3- Mahsulot
let count_3 = 0;
let count3 = document.getElementById("count3");
let addbtn3 = document.getElementById("addbtn3");
let rbtn3 = document.getElementById("rbtn3");

addbtn3.addEventListener("click", function (){
    count_3++;
    count3.innerText = count_3;
    tg.MainButton.setText("To'lov");
    tg.MainButton.show();
});

rbtn3.addEventListener("click", function (){
    if (count_3 > 0) {
        count_3--;
        count3.innerText = count_3;
    }
    if (count_3 === 0) {
        tg.MainButton.hide();
    }
});

// 4- Mahsulot
let count_4 = 0;
let count4 = document.getElementById("count4");
let addbtn4 = document.getElementById("addbtn4");
let rbtn4 = document.getElementById("rbtn4");

addbtn4.addEventListener("click", function (){
    count_4++;
    count4.innerText = count_4;
    tg.MainButton.setText("To'lov");
    tg.MainButton.show();
});

rbtn4.addEventListener("click", function (){
    if (count_4 > 0) {
        count_4--;
        count4.innerText = count_4;
    }
    if (count_4 === 0) {
        tg.MainButton.hide();
    }
});
