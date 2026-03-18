import express from 'express';
import getWeather from './controllers/weather.ts';

const routes = express.Router();

routes.get('/getWeather', getWeather.getActualWeatherFrom);


export default routes;