import countriesData from '../../countries.json';

export function CountriesList () {
    {countriesData.map(country => {
        return (
            {country.name.common})
    })}
}
