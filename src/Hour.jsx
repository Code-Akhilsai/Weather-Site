import { useEffect, useState } from "react";

const Hour = ({ h_cou }) => {
  const [data, setData] = useState(null);

  const hour_data = async (city_name) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&units=metric&appid=${
      import.meta.env.VITE_APP_ID
    }`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Invalid API key or request");
      return;
    }
    const h_data = await response.json();
    setData({
      Time: h_data.list[1].dt_txt,
      Temp: Math.floor(h_data.list[1].main.temp),
      Icon: h_data.list[1].weather[0].icon,
    });
  };

  useEffect(() => {
    hour_data(h_cou);
  }, [h_cou]);

  return (
    <div className="hour_cont" id="hour_cont">
      <h1>Hourly</h1>

      {data ? (
        <>
          <p style={{ fontSize: "14px" }}>{data.Time}</p>
          <br />
          <br />
          <div className="hour_cont2">
            <img
              src={`https://openweathermap.org/img/wn/${data.Icon}.png`}
              alt="Weather Icon"
              height="85px"
            />
            <p>{data.Temp}°C</p>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Hour;
