let celcius = 0;
let fah;

while(celcius < 151){
    fah = (celcius*(9/5))+32;
    console.log(`${fah}°F = ${celcius}°C`);
    celcius += 10
}