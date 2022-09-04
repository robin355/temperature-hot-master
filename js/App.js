// My Api Don't show anyone
const Api_key = `a485e8c42b01de8c99d3b405f5ea27be`;
const loadWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => disolayTeamperatur(data))
}
const disolayTeamperatur = teamPerture => {
    const containTeamperture = document.getElementById('teamperture');
    containTeamperture.innerText = teamPerture.main.temp;
}
loadWeather('Dhaka');