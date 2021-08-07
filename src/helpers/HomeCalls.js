import axios from "axios";

const baseUrl = "https://610b052b52d56400176b00b1.mockapi.io/meals";

export const getMeals = (prop) => {
  //prop is for representation purpose only
  return axios.get(baseUrl);
};
