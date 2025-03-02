import { useEffect } from "react";
import { useState } from "react";

const Min = ({ min_cou }) => {
  const [data, setData] = useState(false);
  const min_data = async (city_name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${
      import.meta.env.VITE_APP_ID
    }`;
    const response = await fetch(url);
    const data = await response.json();
    setData({
      Min: Math.floor(data.main.temp_min),
      Icon: data.weather[0].icon,
    });
  };

  useEffect(() => {
    min_data(min_cou);
  }, [min_cou]);
  return (
    <div className="hour_cont">
      <h1>Min</h1>
      {data ? (
        <div className="Min_cont2">
          <img
            src={`https://openweathermap.org/img/wn/${data.Icon}.png`}
            alt="Weather Icon"
            height="100px"
          />
          <p className="fareh_data">{data.Min}°C</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default Min;
