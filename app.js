let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#af0808";

btn1.addEventListener("click", function (){
    tg.MainButton.show()
})