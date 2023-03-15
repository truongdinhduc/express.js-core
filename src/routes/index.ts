import express from 'express';
import { exampleRoute } from '../controller/example';
import createRoute from '../server/createRoute';

const routes = (app: express.Application) => {
    createRoute(app, 'GET', '', exampleRoute)
}

export {
    routes
}