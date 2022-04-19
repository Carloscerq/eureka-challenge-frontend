import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
