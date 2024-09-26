import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { DownloadApp } from "./components/downloadApp";
import { Contact } from "./components/contact";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import "./App.css";
import AllFeature from "./components/allFeature";
import Choose from "./components/choose";
import Common from "./components/common";
import { Industries } from "./components/industries";
import { Cities } from "./components/cities";
import { Testimonials } from "./components/testimonials";
import FAQPage from "./components/faq";
import Widget from "./components/widget";
import { Awards } from "./components/awards";
import { AboutContact } from "./components/aboutContact";
import { Additional } from "./components/additionalFeatures";

const App = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [activeSection, setActiveSection] = useState("home"); // New state to track active section

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  if (!landingPageData) {
    return <div>Loading...</div>;
  }

  if (!landingPageData) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        {/* Pass setActiveSection to Navigation */}
        <Navigation setActiveSection={setActiveSection} features={landingPageData.Navigation} />

        {/* Conditionally render sections based on the activeSection */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {activeSection === "home" && (
                  <>
                    <Header data={landingPageData.Header} />
                    <About data={landingPageData.About} />
                    <Choose data={landingPageData.Services} />
                    <Features data={landingPageData.Features} />
                    <Awards />
                    <Additional data={landingPageData.Additional} />
                    <Gallery data={landingPageData.Gallery} />
                    <Services data={landingPageData.Services} />
                    <Team data={landingPageData.Team} />
                    <DownloadApp data={landingPageData.DownloadApp} />
                    <Industries />
                    <Cities />
                    <Testimonials data={landingPageData.Testimonials} />
                    <FAQPage />
                    <Contact data={landingPageData.Contact} />
                    <Widget data={landingPageData.Widget} />
                  </>
                )}

                {activeSection === "about" && (
                  <>
                    <About data={landingPageData.About} />
                    <Contact data={landingPageData.Contact} />
                  </>
                )}

                {activeSection === "services" && (
                  <>
                    <Services data={landingPageData.Services} />
                    <Contact data={landingPageData.Contact} />
                  </>
                )}

                {activeSection === "features" && (
                  <Features data={landingPageData.Features} />
                )}

                {activeSection === "app" && (
                  <>
                    <DownloadApp data={landingPageData.DownloadApp} />
                    <Contact data={landingPageData.Contact} />
                  </>
                )}

                {activeSection === "contact" && (
                  <>
                    <AboutContact data={landingPageData.AboutContact} />
                    <Contact data={landingPageData.Contact} />
                  </>
                )}
              </>
            }
          />

          <Route
            path="/features"
            element={
              <AllFeature
                data={landingPageData.AllFeature}
                societyInfo={landingPageData.SocietyInfo}
              />
            }
          />
          <Route path="/common/:section" element={<Common />} />
          <Route path="/allFeature" element={<AllFeature
            data={landingPageData.AllFeature}
            societyInfo={landingPageData.SocietyInfo} />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
