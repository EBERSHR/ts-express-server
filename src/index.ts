import express from 'express';

import diaryRouter from './routes/diaries';
import userRouter from './routes/users';

const app = express();

app.use(express.json());

// const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.get('/ping', ( _req, res ) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diaries', diaryRouter);
app.use('/api/users', userRouter);
app.use('/api/users/:id', userRouter);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} typescript`);
});  