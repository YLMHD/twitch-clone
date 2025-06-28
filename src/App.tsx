
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Layout from "./components/parts/Layout";

function App() {

  return (
    <>
      <Layout>
        <h1 className="text-3xl font-bold underline">
          {" "}
          Hello world!
          <FontAwesomeIcon icon={faCoffee} className="text-2xl text-blue-500" />
        </h1>
      </Layout>
    </>
  );
}

export default App;
