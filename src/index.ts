import express, { Express, Request, Response } from 'express';

const app = express();
const PORT = 2024;

app.use(express.json());
app.post('/', (req: Request, res: Response) => {
  const { name: String } = req.body;
  console.log(req.body);
  res.send(`Welcome ${name}`);
});
app.get('/', (req: Request, res: Response) => res.send('Teohaik hello from Crete!'));

app.listen(PORT, () => {
  console.log(
    'Teo Server is Successfully Running, and       App is listening on port ' + PORT
  );
});
