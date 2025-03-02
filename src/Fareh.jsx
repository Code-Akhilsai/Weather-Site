import { useEffect, useState } from "react";

const Fareh = ({ f_cou }) => {
  const [data, setData] = useState(null);

  const fareh_handler = async (city_name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&appid=${
      import.meta.env.VITE_APP_ID
    }`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Invalid API key or request");
      return;
    }
    const f_data = await response.json();
    setData({
      Temperature: Math.floor(f_data.main.temp),

      Icon: f_data.weather[0].icon,
    });
  };

  useEffect(() => {
    fareh_handler(f_cou);
  }, [f_cou]);

  return (
    <div className="hour_cont">
      <h1>Fahrenheit</h1>

      {data ? (
        <>
          <div className="Min_cont2">
            <img
              src={`https://openweathermap.org/img/wn/${data.Icon}.png`}
              alt="Weather Icon"
              height="85px"
            />
            <p className="fareh_data">{data.Temperature}°F</p>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Fareh;
