import express from 'express';
import routes from './routes/index';

const app = express();

const port = 3000;

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    `<h2>Available file name images:</h3>
      <br/>
      <ul>
        <li>encenadaport</li>
        <li>fjord</li>
        <li>icelandwaterfall</li>
        <li>palmtunnel</li>
        <li>santamonica</li>
      </ul>
      <br/>
      <h3>Example url:</h3>
      <a href="/api/image-processing/resize?filename=encenadaport&width=300&height=150">http://localhost:3000/api/image-processing/resize?filename=encenadaport&width=300&height=150</a>
      `
  );
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
