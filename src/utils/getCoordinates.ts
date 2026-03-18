export const getCoordinates = async (city: string) => {

    if (!city) return;

    const coordinatesFetch = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`)

    if (!coordinatesFetch.ok) throw new Error(`Geocoding API error: ${coordinatesFetch.status}`);

    const response = await coordinatesFetch.json() as { results: { latitude: number, longitude: number }[] };

    const latitudeAndLongitudeObject = {
        latitude: response.results[0].latitude,
        longitude: response.results[0].longitude
    }

    return latitudeAndLongitudeObject;
}