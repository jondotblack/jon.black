import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

import Weather from './Weather';

const { NEXT_PUBLIC_WEATHER_API_KEY } = process.env;
const zipCode = '07304';

const WeatherContainer = () => {
  const [data, setData] = useState(null);

  async function fetchData() {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${NEXT_PUBLIC_WEATHER_API_KEY}`,
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject({ status: res.status, statusText: res.statusText });
      })
      .then((resData) => setData(resData))
      .catch((err) => console.log('error', err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return data && <Weather data={data} />;
};

export default WeatherContainer;
