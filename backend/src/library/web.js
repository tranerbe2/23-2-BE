import express from "express";
import helmet from "helmet";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {errorMiddleware} from "../middleware/errorMiddleware.js";
import morganMiddleware from "../middleware/morganMiddleware.js";
import usersRouter from '../routes/usersRoutes.js';
import ingredientsRouter from '../routes/ingredientsRouter.js';


export const web = express();
web.use(express.json());
web.use(helmet());
web.use(cors());
web.use(cookieParser());

web.use('/api/v1', usersRouter);
web.use('/api/v1', ingredientsRouter);

web.use(morganMiddleware);
web.use(errorMiddleware);
