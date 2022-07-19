import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components/';

import './App.scss';

function App() {
    return (
        <div className="app">
            <Navbar />
            <About />
            <Footer />
            <Header />
            <Skills />
            <Testimonials />
            <Work />
        </div>
    );
}

export default App;
