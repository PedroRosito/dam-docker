
window.onload = inicio;

function inicio(){
    let btn = document.getElementById("btnSaludar");
    btn.onclick = saluar;
}

function saluar() {
    alert("Hola");
}
