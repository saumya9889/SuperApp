
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { WiDaySunny, WiRain, WiThunderstorm, WiCloudy } from "react-icons/wi";


// const WeatherCard = () => {
//   const [weatherData, setWeatherData] = useState();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const API_KEY = "820126a43d4d774f275fa01855a8bcf6";
//       const city = "Delhi";
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//       try {
//         const response = await axios.get(url);
//         console.log("Weather Data:", response.data); // Debugging
//         setWeatherData(response.data);
//       } catch (error) {
//         console.error(
//           "Error fetching weather data:",
//           error.response?.data || error.message
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchWeatherData();
//   }, []);

//   if (isLoading) {
//     return <div className="weather-card">Loading...</div>;
//   }

//   if (!weatherData) {
//     return <div className="weather-card">Error fetching weather data.</div>;
//   }

//   const { main, weather, wind, dt } = weatherData;
//   const date = new Date(dt * 1000).toLocaleDateString();
//   const time = new Date(dt * 1000).toLocaleTimeString();

//   // Weather icon based on condition
//   let weatherIcon;
//   switch (weather[0].main) {
//     case "Clear":
//       weatherIcon = <WiDaySunny size={50} />;
//       break;
//     case "Rain":
//       weatherIcon = <WiRain size={50} />;
//       break;
//     case "Thunderstorm":
//       weatherIcon = <WiThunderstorm size={50} />;
//       break;
//     case "Clouds":
//       weatherIcon = <WiCloudy size={50} />;
//       break;
//     default:
//       weatherIcon = <WiDaySunny size={50} />;
//       break;
//   }

//   return (
//     <div className="weather-card">
//       <div className="weather-card__header">
//         <span className="date">{date}</span>
//         <span className="time">{time}</span>
//       </div>

//       <div className="weather-card__body">
//         <div className="weather-condition">
//           <div className="weather-icon">{weatherIcon}</div> {/* Display weather icon */}
//           <span>{weather?.length > 0 ? weather[0].description : "No data available"}</span>
//         </div>
//         <div className="line-space"></div>
//         <div className="temperature">
//           <span>{main.temp}°C</span>
//           <span className="value">{main.pressure} mbar Pressure</span>
//         </div>
//         <div className="line-space"></div>
//         <div className="details">
//           <div className="detail-item">
//             <span className="value">{wind.speed} km/h</span>
//             <span className="label">Wind</span>
//           </div>
//           <div className="detail-item">
//             <span className="value">{main.humidity}%</span>
//             <span className="label">Humidity</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiRain, WiThunderstorm, WiCloudy, WiStrongWind, WiHumidity, WiThermometer } from "react-icons/wi"; // Import icons

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const API_KEY = "820126a43d4d774f275fa01855a8bcf6";
      const city = "Delhi";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      try {
        const response = await axios.get(url);
        console.log("Weather Data:", response.data); // Debugging
        setWeatherData(response.data);
      } catch (error) {
        console.error(
          "Error fetching weather data:",
          error.response?.data || error.message
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (isLoading) {
    return <div className="weather-card">Loading...</div>;
  }

  if (!weatherData) {
    return <div className="weather-card">Error fetching weather data.</div>;
  }

  const { main, weather, wind, dt } = weatherData;
  const date = new Date(dt * 1000).toLocaleDateString();
  const time = new Date(dt * 1000).toLocaleTimeString();

  // Weather icon based on condition
  let weatherIcon;
  switch (weather[0].main) {
    case "Clear":
      weatherIcon = <WiDaySunny size={70} />;
      break;
    case "Rain":
      weatherIcon = <WiRain size={70} />;
      break;
    case "Thunderstorm":
      weatherIcon = <WiThunderstorm size={70} />;
      break;
    case "Clouds":
      weatherIcon = <WiCloudy size={70} />;
      break;
    default:
      weatherIcon = <WiDaySunny size={70} />;
      break;
  }

  return (
    <div className="weather-card">
      <div className="weather-card__header">
        <span className="date">{date}</span>
        <span className="time">{time}</span>
      </div>

      <div className="weather-card__body">
        <div className="weather-condition">
          <div className="weather-icon">{weatherIcon}</div> {/* Display weather icon */}
          <span>{weather?.length > 0 ? weather[0].description : "No data available"}</span>
        </div>

        {/* Line space divider */}
        <div className="line-space"></div>

        <div className="temperature">
          <span>{main.temp}°C</span>
          <div className="temp-wrap">
          <WiThermometer size={70} />
          <span className="value"> {main.pressure} mbar  Pressure</span>
        </div>
        </div>

        <div className="line-space"></div>

        <div className="details">
          <div className="detail-item">
            <WiStrongWind size={70} /> 
            <div className="detail-item-wrap">
            <span className="value">{wind.speed} km/h</span>
            <span className="label">Wind Speed</span>
          </div>
          </div>
          <div className="detail-item">
            <WiHumidity size={70} /> 
            <div className="detail-item-wrap">
            <span className="value">{main.humidity}%</span>
            <span className="label">Humidity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
