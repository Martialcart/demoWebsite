let char_best = [];
let char_worst = [];
let average_reaction_time = 0;
let reactions = 1;
let time_stamp = performance.now(); 
const no_char_err_msg = "Ingen treningstegn angitt";

function handle_input() {
    const result = document.getElementById("char_result");
    const input = document.getElementById("char_input");
    const request = document.getElementById("char_request");
    result.innerHTML = evaluate(request, input);
    input.value = "";
}

function evaluate(request, input) {
    const succes = input.value + " er riktig!";
    const fail = input.value + " er feil, forventet " + request.innerHTML;
    if(request.innerHTML === input.value.charAt(0)) {
        let temp = request.innerHTML;
        get_new_char_request();
        let time = timer();
        if(time < average_reaction_time) char_best.push(temp);
        else char_worst.push(temp);
        average_reaction_time = average(time);
        console.log(average_reaction_time);
        console.log(char_worst.length);
        return succes;
    } else {
        return fail;
    }
}

function update_chars() {
    char_best = [];
    char_worst = [];
    const chars = document.getElementById("train_char").value;
    const n_chars = chars.length;
    for (c=0; c < n_chars; c++) {
        char_worst.push(chars.charAt(c));
    }
    get_new_char_request();
}

function get_new_char_request() {
    const requester = document.getElementById("char_request");
    if(3 < char_worst.length) requester.innerHTML = char_worst.pop();
    else if(0 < char_best.length) requester.innerHTML = char_best.pop();
    else requester.innerHTML = no_char_err_msg;
}
/* returns time since last call*/ 
function timer() {
    let temp = time_stamp;
    time_stamp = performance.now();
    return time_stamp - temp;
}
/* ads a new value to already esitmated average*/ 
function average(new_time) {
    return (average_reaction_time * (reactions - 1)  + new_time) / reactions++;
}