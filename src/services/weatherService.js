const API_KEY ='6b13006e25b05078cc05f51179e74641';
const BASE_URL ='https://api.openweathermap.org/data/2.5'
const getWeatherData=(infoType, searchParams) =>{
    const url =new URL (Base_URL + '/'+ infoType)
    url.search =new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res) => res.json())
   
}

const formatCurrentWeather =(data) =>{
    const {
        coord:{lat,lon},
        main:{temp,temp_min,temp_max,humidity},
        name,
        dt,
        sys:{country,sunrise,sunset},
        wind:{speed}
    } =data

    const {main: details, icon} =weather[0]

    return {lat,lon,temp,temp_max,temp_min,humidity,dt,country,sunrise,sunset,weather,speed}
}

const formatForecastWeather =(data) =>{
    let {timezone,daily,hourly}= data;
    hourly = hourly.slice(1,6).map(d => {
        return{
            title: formatToLocalTime(d.dt,timezone,'hh:mm a'),
            temp:d.temp.day,
            icon:d.weather[0].icon
        }
    })
    return {timezone,daily, hourly}
}
const getFormattedWeatherData=async (searchParams) =>{
    const formattedCurrentWeather = await 
    getWeatherData('weather', searchParams).then(formatCurrentWeather)

    const formattedForecastWeather = await getWeatherData('onecall', {lat,lon,exclude:'current,minutely,alerts',units:searchParams.units})
    .then(formatForecastWeather)
    
    return {...formattedCurrentWeather,...formattedForecastWeather}
}

const formatToLocalTime =(secs,zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a")  => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData