import express from 'express';

const app = express();

app.get('/', (req, res)=>{
  res.send({ test: "hi"});
});

export default app;