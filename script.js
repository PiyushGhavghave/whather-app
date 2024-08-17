const api_key = "482425fc4bbe5b6c9d1bebc271612d36"

const api = "https://api.openweathermap.org/data/2.5/weather?units=metric"

const input = document.querySelector('input[type="text"]')
const submit = document.querySelector('button')
const temp = document.querySelector('.temperature')
const loc = document.querySelector('.location')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')

document.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        search();
    }
})
function search(){
    let val = input.value;
    getTemp(val);
}


async function getTemp(val){
    let temp = await fetch(api + `&appid=${api_key}&q=${val}`)
    let data = await temp.json();
    console.log(data);
    display(data)
}

function display(data){
    temp.innerHTML= `${data.main.temp}°C`
    loc.innerHTML= `${data.name}`
    humidity.innerHTML = `${data.main.humidity}% Humidity`
    wind.innerHTML = `${data.wind.speed} Km/hr`
}