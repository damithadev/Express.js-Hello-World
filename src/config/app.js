import express from 'express';
import router from '../api/v1/routes.js';

const app = express();
app.use(express.json());

app.use("/api/v1", router);

export default app;