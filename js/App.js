// My Api Don't show anyone
const Api_key = `a485e8c42b01de8c99d3b405f5ea27be`;
const loadWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => disolayTeamperatur(data))
}
const disolayTeamperatur = teamPerture => {
    dispalygetID('teamperture', teamPerture.main.temp);
    dispalygetID('condition', teamPerture.weather[0].main)
    console.log(teamPerture);

}
const dispalygetID = (id, text) => {
    const containTeamperture = document.getElementById(id);
    containTeamperture.innerText = text;
}



document.getElementById('btn-field').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    document.getElementById('city').innerText = inputText;
    loadWeather(inputText);
    inputField.value = '';
})