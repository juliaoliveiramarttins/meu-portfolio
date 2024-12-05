import React from 'react';
import Header from './components/header/header';
import MainSection from './components/mainSection/mainSection';
import LogoSection from './components/logoSection/logoSection';
import ToolsSection from './components/toolsSection/toolsSection';
import AboutMe from './components/aboutMe/aboutMe';
import ContactInfo from './components/contactInfo/contactInfo';
import Footer from './components/footer/footer';


// import Footer from './components/footer/footer'

const App = () => {
    return (
        <>
            <Header />
            <MainSection />
            <LogoSection />
            <ToolsSection />
            <AboutMe />
            <ContactInfo />
            <Footer /> 
        </>
    );
}

export default App;
