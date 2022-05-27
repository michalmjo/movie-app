import "../styles/app.css";

import Header from "./Header";
import Main from "./Main";

const App = () => {
  console.log("Zaladowalo sie App");

  return (
    <>
      <div className="App">
        <header>
          <Header />
        </header>
        <section className="main">
          <Main />
        </section>
      </div>
    </>
  );
};

export default App;
