import first from "..assets/first";
import second from "..assets/second";

function About () {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>
                    Little Lemon
                </h1>
                <h2>
                    Chicago
                </h2>
                <p className="subtext">
                Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.
                </p>
            </section>
            <section className="two-images">
                <img className="first-img" src={first} alt="firstfoodimage">Food</img>
                <img className="secong-img" src={second} alt="secondfoodimage">Food</img>
            </section>
        </article>
    )
}

export default About;