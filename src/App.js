import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Locations from "./repository/locations";
import { Select } from "antd";

const { Option } = Select;

function App() {
  const [province, setProvince] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    getProvinces();
  }, [cities]);

  async function getProvinces() {
    let provinces = await Locations.getListProvince({});
    setProvince(provinces.data.data.provinces);
  }

  async function getCities(value) {
    let cities = await Locations.getListDistricts({ id: value });
    setCities(cities.data.data.districts);
  }

  function handleProvinceChange(value) {
    getCities(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Select
          style={{ width: 300 }}
          placeholder="Select a Provinces"
          onChange={handleProvinceChange}
        >
          {province.map((province, index) => (
            <Option key={province.id}>{province.name}</Option>
          ))}
        </Select>
        <Select
          style={{ width: 300, marginTop: 20 }}
          placeholder="Select a Districts"
        >
          {cities.map((city, index) => (
            <Option key={city.id}>{city.name}</Option>
          ))}
        </Select>
      </header>
    </div>
  );
}

export default App;
