import "./App.css";
import AboutMe from "./sections/about-me";
import ContactMe from "./sections/contact-me";
import CurriculumVitae from "./sections/curriculum-vitae";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Menu from "./sections/menu";
import MyWork from "./sections/my-work";
import WhatIDo from "./sections/what-i-do";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Header />
        <Menu />
      </div>
      <WhatIDo id="about-me" />
      <AboutMe />
      <MyWork id="my-work" />
      <CurriculumVitae id="curriculum-vitae" />
      <ContactMe id="contact-me" />
      <Footer />
    </div>
  );
}

export default App;
