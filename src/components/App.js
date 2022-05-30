import "../styles/app.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <header>
          <Header />
        </header>
        <section className="main">
          <Main />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default App;
