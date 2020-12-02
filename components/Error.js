import Layout from "./Layout";
const Error = ({setError}) => {
  return (
    <Layout>
        <div>
      <div className="alert alert-primary w-25 m-auto" role="alert">
        An error ocurred. Please try again.
      </div>
      <div className="m-auto mt-3">
        <button className="btn btn-primary" onClick={() => setError(false)}>Refresh</button>
      </div>
        </div>

    </Layout>
  );
};

export default Error;
