import React from "react";
import {
  Header,
  PageOne,
  PageTwo,
  PageThree,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
  Footer,
} from "./components/index";

function App() {
  return (
    <div id="app-container">
      <Header />
      <main id="main-content">
        <PageOne />
        <PageTwo />
        <PageThree />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Footer />
      </main>
    </div>
  );
}

export default App;
