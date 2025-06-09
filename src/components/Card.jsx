
const Card = ( props ) => {

    const {country} = props;

    return (
        <ul>
            <li className="card">
                <img src={country.flag} alt="flag" title={country.name + " / " + country.capital}/>
            </li>
        </ul>
    );
};

export default Card;