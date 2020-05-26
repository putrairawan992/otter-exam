import axios from 'axios';

export const serviceWithoutToken = () => axios.create({
  baseURL: "https://34.87.158.65/v1/location/",
  timeout: 60 * 4 * 1000,
  headers: {
    "Content-Type": `application/json`,
  }
});