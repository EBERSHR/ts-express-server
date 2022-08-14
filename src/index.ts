import express from 'express';

import diaryRouter from './routes/diaries';

const app = express();

app.use(express.json());

// const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.get('/ping', ( _req, res ) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} typescript`);
});  