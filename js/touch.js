let char_best = [];
let char_worst = [];
let average_reaction_time;
let reactions = 0;
let time_stamp = performance.now();

function handle_input() {
    const result = document.getElementById("char_result");
    const input = document.getElementById("char_input");
    const request = document.getElementById("char_request");
    result.innerHTML = evaluate(request, input);
    input.value = "";
}

function evaluate(request, input) {
    const succes = input.value + " is correct!";
    const fail = input.value + " is wrong, expected " + request.value;
    if(request.value === input.value) {
        return succes;
    } else {
        return fail;
    }
}

function update_chars() {
    char_worst = chars.innerHTML.split();
}