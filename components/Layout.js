import NavBar from "./NavBar";
import Head from "next/head";
const Layout = (props) => {
    
  return (
    <div>
      <Head>
        <title>Warehouse</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/darkly/bootstrap.min.css"
        />
      </Head>
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
