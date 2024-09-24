import express, { NextFunction, Request, Response } from 'express';

import todoRoutes from './routes/todos';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json(500).json({ message: err.message });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}...`);
});
