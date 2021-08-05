function generate_menubar() {
    add_menu_headline("meg");
    add_menu_button("CV", "cv.html");

    add_menu_headline("Prosjekt");
    add_menu_button("Literpris Alkohol", "alko_pris.html");
    add_menu_button("Touch", "touch.html");
    
}

function add_menu_button(name, link) {
    const button = document.createElement("button");
    button.innerHTML = name;
    button.addEventListener("click", function() {
        if(not_same_page(link)) window.open(link, "_self");
    });
    document.getElementById("menu").appendChild(button);
}

function add_menu_headline(title) {
    const headline = document.createElement("h1");
    headline.innerHTML = title;
    document.getElementById("menu").appendChild(headline);
}

function not_same_page(link) {
    let url = window.location.toString();
    let short_url = url.substring(url.length - link.length, url.length);

    return short_url !== link;
}