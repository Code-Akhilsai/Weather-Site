import { useEffect } from "react";
import { useState } from "react";

const Max = ({ max_cou }) => {
  const [data, setData] = useState(false);
  const max_data = async (city_name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${
      import.meta.env.VITE_APP_ID
    }`;
    const response = await fetch(url);
    const data = await response.json();
    setData({
      Max: Math.floor(data.main.temp_max),
      Icon: data.weather[0].icon,
    });
  };

  useEffect(() => {
    max_data(max_cou);
  }, [max_cou]);
  return (
    <div className="hour_cont">
      <h1>Max</h1>
      {data ? (
        <div className="Min_cont2">
          <img
            src={`https://openweathermap.org/img/wn/${data.Icon}.png`}
            alt="Weather Icon"
            height="100px"
          />
          <p className="fareh_data">{data.Max}°C</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default Max;
