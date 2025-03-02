import { useEffect, useState } from "react";

const Places = () => {
  const places = [
    "London, UK",
    "Paris, France",
    "Dubai, UAE",
    "Tokyo, Japan",
    "Berlin, Germany",
    "Toronto, Canada",
    "New Delhi, India",
    "Sydney, Australia",
    "Los Angeles, USA",
  ];

  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async (place) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${
      import.meta.env.VITE_APP_ID
    }`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      place,
      temperature: Math.floor(data.main.temp),
      icon: data.weather[0].icon,
    };
  };

  useEffect(() => {
    const fetchAllWeatherData = async () => {
      const data = await Promise.all(
        places.map((place) => fetchWeatherData(place))
      );
      setWeatherData(data);
      setLoading(false);
    };

    fetchAllWeatherData();
  }, []);

  return (
    <>
      <div id="places_cont">
        {loading ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              fontSize: "20px",
            }}
          >
            Loading...
          </p>
        ) : (
          weatherData.map((weather, index) => (
            <div key={index} className="place_item">
              <p>
                {weather.place}:
                <span className="temperature">{weather.temperature}°C</span>
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                alt="Weather Icon"
                height="55px"
                style={{ marginRight: "15px" }}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Places;
