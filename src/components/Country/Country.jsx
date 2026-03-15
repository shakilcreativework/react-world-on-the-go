import React from 'react';

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

const Country = ({country}) => {
    // console.log(country.flags?.flags?.png);

    return (
        <div>
            <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt} />
            <h3>Name: {country.name?.common}</h3>
            <p>Population: {country.population?.population}</p>
        </div>
    );
};

export default Country;