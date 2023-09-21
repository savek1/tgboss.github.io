let tg = Telegram.WebApp;

tg.ready();
tg.expand();
tg.setHeaderColor("#2cab37");
tg.MainButton.textColor = "#FFFFFF";
// tg.MainButton.color = "#2cab37";
document.addEventListener("change", function(){
    tg.MainButton.setText("Save");
    tg.MainButton.show();
})


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    let data = "";
    let checked = document.querySelectorAll("input");
    for (i=0;i<checked.length;i++){
        if (checked[i].checked){
            console.log(checked[i].id)
            data = data +","+ checked[i].id
        }
    }
    let radius = document.querySelector("#search-radius").value
    let share_amount = document.querySelector("#share-amount").value
    tg.sendData(data+'_'+ radius+ '_' + share_amount);
})
