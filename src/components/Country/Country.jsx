import React from 'react';
import './Country.css';

// {
//     "name": {
//         "common": "Curaçao",
//         "official": "Country of Curaçao"
//     },
//     "ccn3": {
//         "ccn3": "531"
//     },
//     "currencies": {
//         "currencies": {
//             "ANG": {
//                 "name": "Netherlands Antillean guilder",
//                 "symbol": "ƒ"
//             }
//         }
//     },
//     "capital": {
//         "capital": [
//             "Willemstad"
//         ]
//     },
//     "region": {
//         "region": "Americas"
//     },
//     "languages": {
//         "languages": {
//             "eng": "English",
//             "nld": "Dutch",
//             "pap": "Papiamento"
//         }
//     },
//     "area": {
//         "area": 444
//     },
//     "cca3": {
//         "cca3": "CUW"
//     },
//     "population": {
//         "population": 155014
//     },
//     "continents": {
//         "continents": [
//             "North America"
//         ]
//     },
//     "flags": {
//         "flags": {
//             "png": "https://flagcdn.com/w320/cw.png",
//             "svg": "https://flagcdn.com/cw.svg",
//             "alt": ""
//         }
//     }
// }

const handleVisited = () => {
    console.log('Country Visited');
};

const Country = ({country}) => {
    // console.log(country.flags?.flags?.png);

    return (
        <div className='country'>
            <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt} />
            <div className='space-y-5'>
                <h3>Name: {country.name?.common}</h3>
                <p>Population: {country.population?.population}</p>
                <p>{country.area?.area} {country.area?.area > 300000 ? 'Big Country' : 'Small Country'}</p>
                <button className='cbtn' onClick={handleVisited}>Not Visited</button>
            </div>
        </div>
    );
};

export default Country;