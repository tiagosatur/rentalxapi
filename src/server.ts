import express from 'express';
import swagger from 'swagger-ui-express';

import { routes } from './routes';
import swaggerConfig from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api/docs', swagger.serve, swagger.setup(swaggerConfig));
app.use(routes);

app.listen(3333);
