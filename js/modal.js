var my_modal = document.getElementById("my_modal");

document.getElementById("clickMeButton").onclick = function() {
    my_modal.style.display="block";
}
document.getElementById("btn_close").onclick = function() {
    my_modal.style.display="none";
}