import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Product from "../../components/Product";

const axios = require("axios").default;

export async function getServerSideProps({ params }) {
  return {
    props: {
      params,
    },
  };
}

export default function Category({ params }) {
  const { category } = params;
  const [isLoading, setIsloading] = useState(true);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const {data} = await axios.get(`/api/${category}`);
              setCurrentProducts(data.products);
              setIsloading(false);
          }
          catch (err) {
            console.log(err);
          }
      }


      fetchProducts();
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
          <div className="container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: "space-around"}}>
              {currentProducts.map((product) =><Product product={product} key={product.id} />)}
          </div>
      )}
    </Layout>
  );
}
