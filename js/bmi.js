/*connects gui and action*/
function handle_input() {
    console.log("testest funket");
}

/*returns kg, from bmi and height*/
function kg(bmi, meter) {
    return bmi * Math.pow(meter,2);
}

/*returns bmi, from weight and height*/
function bmi(kg, meter) {
    return kg / Math.pow(meter, 2);
}

/*converts centimeters to meters*/
function to_m(cm) {
    return cm / 100;
}

/*returns position in percent*/
function result_position(domain_size, position) {
    return position / domain_size * 100;
} 