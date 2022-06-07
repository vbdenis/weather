import axios from 'axios';

const city = 'Москва';

//openweathermap
const apiKey = '71d3116cdec29555a60b0a6d5590033a';

//Прогноз погоды на сейчас
const forecastToday = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//Прогноз погоды на 5 дней по часам, с трехчасовым интервалом https://openweathermap.org/forecast5
const forecastFiveDays = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

//Прогноз погоды на 4ре трехчасовых интервала https://openweathermap.org/forecast5
const forecastHourInterval = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=4`;

// export async function getforecastToday() {
export async function getforecastToday(cityName = city) {
    try {
        // const response = await axios.get(forecastToday);
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        return response.data;
    } catch(err) {
        console.log(err);
    }
};

export async function geforecastFiveDays() {
    try {
        const response = await axios.get(forecastFiveDays);
        return response.data;
    } catch(err) {
        console.log(err);
    }
};

export async function getforecastHourInterval() {
    try {
        const response = await axios.get(forecastHourInterval);
        return response.data;
    } catch(err) {
        console.log(err);
    }
};
