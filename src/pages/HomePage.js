import Heading from "../components/sections/headingpages/Heading";
import Specials from "../components/sections/headingpages/Specials";
import Testimonials from "../components/sections/headingpages/Testimonials";
import About from "../components/sections/headingpages/About";

function HomePage () {
    return (
        <>
        <Heading />
            <main>
                <Specials />
                <Testimonials />
                <About />
            </main>
        </>
    );
}

export default HomePage;