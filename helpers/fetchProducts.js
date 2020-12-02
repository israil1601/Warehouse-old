import axios from "axios";
import getManufacturers from "./getManufacturers";
import getAvailability from "./getAvailability";
import { URL, categories } from "../constants/constants";

const fetchProducts = async (category) => {
  if (!categories.includes(category)) return [];

  let products = [];
  const availabilities = {};

  try {
    const { data } = await axios.get(`${URL}/products/${category}`);
    products = data;
  } catch (err) {
    return [];
  }

  const manufacturers = getManufacturers(products);

  for (const { manufacturer } of manufacturers) {
    try {
      const {
        data: { response },
      } = await axios.get(`${URL}/availability/${manufacturer}`);

      response.forEach(({ id, DATAPAYLOAD }) => {
        availabilities[id] = DATAPAYLOAD;
      });
    } catch (err) {
      return [];
    }
  }
  getAvailability(products, availabilities);
  return products;
};

export default fetchProducts;
