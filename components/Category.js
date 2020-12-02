import { useContext, useEffect, useState } from "react";
import AppContext from "./AppContext";
import Layout from "./Layout";
import Product from "./Product";
import fetchProducts from "../helpers/fetchProducts";
import Error from "./Error";
import Loading from "./Loading";

export default function Category({ category }) {
  const [error, setError] = useState(false);
  const { products, dispatch } = useContext(AppContext);

   // helper function to fetch data on client side
  const fetchData = async () => {
    const products = await fetchProducts(category);
    if (!products.length) {
      setError(true);
      return;
    }

    dispatch({
      category,
      products,
    });

    setError(false);
  };


  useEffect(() => {
      // if products were fetched, return;
    if (products[category]) {
      return;
    }

    fetchData();
  }, []);

  
  if (error) {
    return <Error setError={setError} />;
  }

  return (
    <Layout>
      <div className="d-flex flex-wrap justify-content-around">
        {products[category] ? (
          products[category].map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
}
