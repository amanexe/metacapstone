import food4 from "../assets/food4.jpg";

function Heading {
    return (
        <header className="reserve-table">
            <img className="header-reserve-table" src={food4} alt="Little Lemon Ingredients">
            </img>
            <div className="reserve-header-text">
                <h1>About Us</h1>
            </div>
        </header>
    );
}

export default Heading;