import React from "react";

const Weather = (props) => {
  console.log(props)
  return (
    <div className="infoWeath">
      { props.city &&
        <div>
          <p>Местоположение: {props.city}, {props.country}</p>
          <p>Температура: {props.temp} °C</p>
          <p>Скорость ветра: {props.wind} м.сек</p>
          <p>Давление: {props.pressure} мм рт.ст.</p>
          <p>Заход солнца: {props.sunset}</p>
        </div>
      }
      <p className="error">{props.error}</p>
      </div>
  );
}

export default Weather;