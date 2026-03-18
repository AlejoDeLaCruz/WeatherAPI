import type { Request, Response } from "express";
import { getCoordinates } from "../utils/getCoordinates.ts";

const getWeather = {
    getActualWeatherFrom: async (req: Request, res: Response) => {

        if (!req.query.city) return;

        const city = typeof req.query.city === "string" ? req.query.city : undefined;

        const weatherFetch = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${(await getCoordinates(city)).latitude}&longitude=${(await getCoordinates(city)).longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m`)

        
        if (!weatherFetch.ok) throw new Error(`Weather API error: ${weatherFetch.status}`);

        const response = await weatherFetch.json() as { current_weather: { time: string, interval: number, temperature: number, windspeed: number, winddirection: number, is_day: number, weathercode: number } };


        const objectToSend = {
            city: city,
            time: response.current_weather.time,
            interval: response.current_weather.interval,
            temperature: response.current_weather.temperature,
            windspeed: response.current_weather.windspeed,
            winddirection: response.current_weather.winddirection,
            is_day: response.current_weather.is_day,
            weathercode: response.current_weather.weathercode
        }

        res.send(objectToSend);
    }
}

export default getWeather;