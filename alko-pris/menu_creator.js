function generate_menubar() {
    add_headline("meg");
    add_button("Alko Pris", "file:alko-pris/alko_pris.html");
    
}

function add_button(name, link) {
    const button = document.createElement("button");
    button.innerHTML = "test";
    document.getElementById("menu").appendChild(button);
}

function add_headline(title) {

}