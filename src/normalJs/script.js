// import rain from '../assets/rain.png'
export function kishu() {

        const apiKey = '91ac006b492e53963eec5b5d52688144'
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
        const search_input = document.querySelector('.search_input');
        const search_btn = document.querySelector('.search_btn');
        const weatherIcon = document.querySelector('.weather_icon');
        

        async function checkweather(city) {
                const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
                let data = await response.json()

                console.log(data)

                document.querySelector('.city').innerHTML = data.name;
                document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';


          

        }

        search_btn.addEventListener('click', () => {
                checkweather(search_input.value)
                search_input.value = '';
        })



}


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}