import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BicycleRoutes } from './app/modules/bicycle/bicycle.route';
// import { OrderRoutes } from './modules/order/order.routes';
import { UserRoutes } from './app/modules/user/user.route';
import authRoute from './app/modules/auth/auth.route';
import orderRouter from './app/modules/order/order.router';
import globalErrorHandler from './app/middlewares/globalErrorhandler';

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      'https://bicycle-sphere-new.vercel.app',
      'https://bicycle-sphere.vercel.app',
      'http://localhost:5173',
      'http://localhost:5174',
    ],
    credentials: true,
  }),
);

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', UserRoutes);
app.use('/api/products', BicycleRoutes);
app.use('/api', orderRouter);

// Health check route
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'server live',
  });
});

app.use(globalErrorHandler);

export default app;
