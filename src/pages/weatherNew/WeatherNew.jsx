import React from "react";

import withLoader from "../../components/withLoader/withLoader";
import styles from "./WeatherNew.module.scss";

function WeatherNew(props) {
  console.log(props.weather.main);

  return (
    <div>
      {typeof props.weather.main !== "undefined" ? (
        <div>
          <h2> Location Name : {props.weather.name} </h2>
          <div className={styles.weatherTable}>
            <table>
              <tr>
                <th>Temperature</th>
                <th>Feels_Like</th>
                <th>Humidity</th>
                <th>Pressure</th>
              </tr>
              <tr>
                <td>{props.weather.main.temp}</td>
                <td>{props.weather.main.feels_like}</td>
                <td>{props.weather.main.humidity}</td>
                <td>{props.weather.main.pressure}</td>
              </tr>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default withLoader(WeatherNew);
