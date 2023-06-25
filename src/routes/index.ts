import express from 'express';
import imageProcessingRoute from './api/image-processing';

const routes = express.Router();

routes.use('/image-processing', imageProcessingRoute);

export default routes;
