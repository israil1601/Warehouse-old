import { useContext, useEffect, useState } from "react";
import AppContext from "../../components/AppContext";
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import fetchProducts from "../../helpers/fetchProducts";

export async function getServerSideProps({ params, res }) {
  return {
    props: {
      params,
    },
  };
}

export default function Category({ params }) {
  const [error, setError] = useState(false);
  const { category } = params;
  const { products, dispatch } = useContext(AppContext);

  const fetchData = async () => {
    const products = await fetchProducts(params);
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
    if (products[params]) {
      return;
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <div className="alert alert-primary" role="alert">
        An error ocurred. Please try again.
        <button className="btn btn-primary">Refresh</button>
      </div>
    );
  }

  return (
    <Layout>
      <div className="d-flex flex-wrap justify-content-around">
        {products[category] ? (
          products[category].map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
