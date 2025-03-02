import { useEffect, useState } from "react";

const Weadisplay = ({ search_cou }) => {
  const [data, setData] = useState(false);

  const wea_handler = async (city_name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${
      import.meta.env.VITE_APP_ID
    }`;
    const response = await fetch(url);
    const data = await response.json();

    setData({
      Temperature: Math.floor(data.main.temp),
      Description: data.weather[0].description,
      Icon: data.weather[0].icon,
      Wind: data.wind.speed,
      Humidity: data.main.humidity,
      Pressure: data.main.pressure,
    });
  };

  useEffect(() => {
    wea_handler(search_cou);
  }, [search_cou]);

  return (
    <>
      <div id="wea_cont1">
        <p className="coun_name">{search_cou}</p>
        <div id="wea_cont2">
          {data ? (
            <>
              <img
                src={`https://openweathermap.org/img/wn/${data.Icon}@2x.png`}
                alt="Weather Icon"
                height="125px"
                style={{ marginTop: "-20px" }}
              />
              <p
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  marginTop: "-12px",
                  fontSize: "23px",
                }}
              >
                {data.Description}
              </p>

              <p className="temp">
                {data.Temperature} <span className="temp">°C</span>
              </p>
              <div id="other_data">
                <p className="data-item">Wind: {data.Wind} km/h</p>

                <p className="data-item">Humidity: {data.Humidity} %</p>

                <p className="data-item">Pressure: {data.Pressure} mb</p>
              </div>
            </>
          ) : (
            <>
              <img
                src={`https://openweathermap.org/img/wn/${data.Icon}@2x.png`}
                alt="Loading..."
                height="125px"
                style={{ marginTop: "-20px" }}
              />
              <p
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  marginTop: "-12px",
                  fontSize: "23px",
                }}
              >
                Loading...
              </p>

              <p
                style={{
                  fontSize: "80px",
                  color: "white",
                  fontWeight: 500,
                  fontFamily: "sans-serif",
                }}
              >
                0 <span style={{ fontSize: "62px" }}>°C</span>
              </p>
              <div id="other_data">
                <p
                  style={{
                    color: "white",
                    fontFamily: "sans-serif",
                    fontWeight: 500,
                    marginTop: "13px",
                    fontSize: "20px",
                    marginLeft: "-8px",
                  }}
                >
                  Wind: 0 km/h
                </p>

                <p
                  style={{
                    color: "white",
                    fontFamily: "sans-serif",
                    fontWeight: 500,
                    marginTop: "13px",
                    fontSize: "20px",
                    marginLeft: "20px",
                  }}
                >
                  Humidity: 0 %
                </p>

                <p
                  style={{
                    color: "white",
                    fontFamily: "sans-serif",
                    fontWeight: 500,
                    marginTop: "13px",
                    fontSize: "20px",
                    marginLeft: "20px",
                  }}
                >
                  Pressure: 0 mb
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Weadisplay;
