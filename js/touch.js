let char_rec = [];

function handle_input() {
    get("char_result").innerHTML = get("char_input").value;
    get("char_input").value = "";
}
function get(id) {
    return document.getElementById(id);
}