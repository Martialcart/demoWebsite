let char_rec = {};
let keys = [];
let time_stamp = performance.now();
const default_reaction_time = 40000;
const no_char_err_msg = "Ingen treningstegn angitt";

function handle_input() {
    const result = document.getElementById("char_result");
    const input = document.getElementById("char_input");
    const request = document.getElementById("char_request");
    result.innerHTML = evaluate(request, input);
    input.value = "";
}

function evaluate(request, input) {
    const succes = input.value + " var riktig!";
    const fail = input.value + " er feil, forventet " + request.innerHTML;
    if(request.innerHTML === input.value.charAt(0)) {
        char_rec[request.innerHTML] = timer();
        get_new_char_request();
        return succes;
    } else {
        return fail;
    }
}

function update_chars() {
    char_rec = {};
    const chars = document.getElementById("train_char").value;
    const n_chars = chars.length;
    worst_char = chars.charAt(0);
    for (c=0; c < n_chars; c++) {
        if(!char_rec.hasOwnProperty(chars.charAt(c))) {
            char_rec[chars.charAt(c)] = default_reaction_time;
            keys.push(chars.charAt(c));
        }
    }
    get_new_char_request();
}

function get_new_char_request() {
    let worst_char = keys[0];
    let request = document.getElementById("char_request");
    for (k = 0; k < keys.length; k++){
        if (char_rec[worst_char] < char_rec[keys[k]] && keys[k] !== request.innerHTML) {
            worst_char = keys[k];
        }
        console.log(keys[k] + char_rec[keys[k]]);
    }
    request.innerHTML = worst_char;
}
/* returns time since last call*/ 
function timer() {
    let temp = time_stamp;
    time_stamp = performance.now();
    return time_stamp - temp;
}