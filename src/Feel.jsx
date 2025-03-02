import { useEffect } from "react";
import { useState } from "react";

const Feel = ({ feel_cou }) => {
  const [data, setData] = useState(false);
  const feel_data = async (city_name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${
      import.meta.env.VITE_APP_ID
    }`;
    const response = await fetch(url);
    const data = await response.json();
    setData({
      Feels: Math.floor(data.main.feels_like),
      Icon: data.weather[0].icon,
    });
  };

  useEffect(() => {
    feel_data(feel_cou);
  }, [feel_cou]);
  return (
    <div className="hour_cont">
      <h1>Feels like</h1>

      {data ? (
        <div className="Min_cont2">
          <img
            src={`https://openweathermap.org/img/wn/${data.Icon}.png`}
            alt="Weather Icon"
            height="100px"
          />
          <p className="fareh_data">{data.Feels}°C</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default Feel;
