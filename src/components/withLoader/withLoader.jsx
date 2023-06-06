import axios from "axios";
import React, { useState } from "react";
import ButtonField from "../buttons/ButtonField";
import InputFields from "../input/InputFields";
import styles from "./WithLoader.module.scss";
import WeatherApi from "../../services/api/weatherService";

const withLoader = (WrappedComponent) => {
  function NewComponent(props) {
    const getWeatherApi = new WeatherApi();
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchWeather = () => {
      getWeatherApi
        .getWeatherDetails({
          q: search,
          appid: "f281c88825fc95be5f3fa2d092876bcc",
        })
        .then((response) => setWeather(response));
    };

    return (
      <div>
        <h2>Weather Info!</h2>
        <div className={styles.weather__search}>
          <InputFields
            name="cityName"
            type={"text"}
            placeholder="Enter your city name"
            onChange={(e) => setSearch(e.target.value)}
          />

          <ButtonField
            buttonText="Search"
            type="button"
            onClick={searchWeather}
          />
        </div>
        <WrappedComponent weather={weather} />
      </div>
    );
  }

  return NewComponent;
};

export default withLoader;
