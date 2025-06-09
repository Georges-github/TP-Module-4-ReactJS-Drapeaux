import { useEffect , useState } from "react";
import Card from "./Card";
import axios from "axios";


const Pays = ( props ) => {

    const [ data , setData ] = useState( [] );//on récupère les donnée dans un tableau vide

    const [ sortData , setSortData ] = useState( [] ); // permet de trie des données

    const [ selectRadio , setSelectRadio ] = useState( "Tous" );

    const [ rangeValue , setRangeValue ] = useState( 35 );

    const radio = [ "Africa" , "America" , "Asia" , "Europe" , "Oceania" , "Tous" ];

    // Charger les données depuis l'API une seule fois au montage
    useEffect( () => {
        axios.get( "https://restcountries.com/v2/all?fields=name,population,region,capital,flag" )
            .then( ( res ) => setData( res.data ) );
    } , [] ); // tableau vide => exécuté une seule fois au début

    // Trier les données chaque fois que 'data' ou 'rangeValue' change
    useEffect( () => {
        if ( data.length ) {
            const sortedArray = [...data].sort( ( a , b ) => b.population - a.population );
            sortedArray.length = rangeValue;
            setSortData( sortedArray) ;
        }
    }, [ data , rangeValue ] );

    return (
        <div className="pays">
            
            <div className="sort_container">

                <input type="range" min="1" max="250" value={rangeValue} onChange={ ( e ) => setRangeValue( e.target.value ) }></input>

                <ul>
                    { radio.map( (r) => {

                            return(

                                <li key={r}>

                                    <input type="radio"
                                    id={ r }
                                    value={ r }
                                    checked={ r === selectRadio }
                                    onChange={ ( e ) =>  setSelectRadio( e.target.value ) }/>

                                    <label htmlFor={ r }>{ r }</label>

                                </li>

                            )
                        
                        }

                    ) }
                </ul>

            </div>

            <div className="pays_liste">
                {
                    sortData.filter( ( c ) => c.region.includes( selectRadio === "Tous" ? "" : selectRadio ) )
                    .map( ( country ) => <Card country={ country } key={ country.name } /> )
                }
            </div>

        </div>
    );
};

export default Pays;