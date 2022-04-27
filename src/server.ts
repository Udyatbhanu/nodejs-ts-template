import 'reflect-metadata';

import 'dotenv/config';
import App from './app';
import validateEnv from './utils/validateEnv';
import Container from 'typedi';

import HelloController from './hello/hello.controller';


validateEnv()


/**
 * Register your controllers
 */
const app = new App(
    [

        Container.get(HelloController),

    ],
);

app.listen();