const axios = require("axios").default;

const getManufacturers = require("../../helpers/getManufacturers");
const getAvailability = require("../../helpers/getAvailability");
const { URL, categories } = require("../../constants/constants");

export default async (req, res) => {
  const {
    query: { category },
  } = req;

  if (!categories.includes(category)) {
    res.statusCode = 404;
    res.end({});
    return;
  }

  let products = [];
  try {
    const { data } = await axios.get(`${URL}/products/${category}`);
    products = data;
  } catch (err) {
    res.statusCode = 404;
    res.end({});
    return;
  }

  const manufacturers = getManufacturers(products);

  let availabilities = {};

  for (const { manufacturer } of manufacturers) {
    try {
      const {
        data: { response },
      } = await axios.get(`${URL}/availability/${manufacturer}`);

      response.forEach(({ id, DATAPAYLOAD }) => {
        availabilities[id] = DATAPAYLOAD;
      });
    } catch (err) {
      res.statusCode = 404;
      res.end({});
      return;
    }
  }
  getAvailability(products, availabilities);
  res.statusCode = 200;
  res.json({ products });
};
