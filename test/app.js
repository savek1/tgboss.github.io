console.log("hi");
let tg = Telegram.WebApp;

        
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.setText("Save");
document.addEventListener("change", function(){
    tg.MainButton.setText("Save");
    tg.MainButton.show();
})


Telegram.WebApp.onEvent("mainButtonClicked", function(){
        alert("PRESSED");
    let data = "";
    let checked = document.querySelectorAll("input");
    for (i=0;i<checked.length;i++){
        if (checked[i].checked){
            console.log(checked[i].id)
            data = data +","+ checked[i].id
        }
    }
    tg.sendData(data);
})
