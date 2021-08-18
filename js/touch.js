let char_rec = {};
let keys = [];
let time_stamp = performance.now();
const default_reaction_time = 40000;
const no_char_err_msg = "Ingen treningstegn angitt";

function handle_input() {
    const result = document.getElementById("char_result");
    const input = document.getElementById("char_input");
    const request = document.getElementById("char_request");
    const succes = input.value + " var riktig!";
    const fail = input.value + " er feil, forventet " + request.innerHTML;

    if(no_characters()) {
        request.innerHTML = no_char_err_msg;
    }
    else if(input_correct(input, request)) {
        set_reaction_time(request.innerHTML);        
        request.innerHTML = get_worst_char(request.innerHTML);
        result.innerHTML = succes;
        result.style.color = "green";
    } else {
        result.innerHTML = fail;
        result.style.color = "red";
    }

    input.value = "";
}

function set_reaction_time(char) {
    char_rec[char] = timer();
}

function input_correct(input, request) {
    return request.innerHTML === input.value.charAt(0);
}

function update_chars() {
    char_rec = {};
    keys = [];
    const chars = randomize(document.getElementById("train_char").value);
    const request = document.getElementById("char_request");
    const n_chars = chars.length;
    worst_char = chars.charAt(0);

    for (c=0; c < n_chars; c++) {
        if(!char_rec.hasOwnProperty(chars.charAt(c))) {
            char_rec[chars.charAt(c)] = default_reaction_time;
            keys.push(chars.charAt(c));
        }
    }

    if (no_characters()) {
        request.innerHTML = no_char_err_msg;
    } else { 
        request.innerHTML = get_worst_char(request.innerHTML);
    }
}

function get_worst_char(last_request) {
    let worst_char = keys[0];

    for (k = 0; k < keys.length; k++){
        if (char_rec[worst_char] < char_rec[keys[k]] && keys[k] !== last_request) {
            worst_char = keys[k];
        }
    }
    return worst_char;
}
/* returns time since last call*/ 
function timer() {
    let temp = time_stamp;
    time_stamp = performance.now();
    return time_stamp - temp;
}

function no_characters() {
    return keys.length === 0;
}

function randomize(string) {
    let a = string.split("");
    let n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}