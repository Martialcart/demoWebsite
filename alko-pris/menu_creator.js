function generate_menubar() {
    add_headline("meg");
    add_button("Alko Pris", "alko_pris.html");
    add_button("google", "https://www.google.com/");
    
}

function add_button(name, link) {
    const button = document.createElement("button");
    button.innerHTML = name;
    button.addEventListener("click", function() {
        if(not_same_page(link)) window.open(link, "_self");
    });
    document.getElementById("menu").appendChild(button);
}

function add_headline(title) {
    const headline = document.createElement("h1");
    headline.innerHTML = title;
    document.getElementById("menu").appendChild(headline);
}

function not_same_page(link) {
    let url = window.location.toString();
    let short_url = url.substring(url.length - link.length, url.length);

    return short_url !== link;
}