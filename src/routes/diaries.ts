import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {

    res.send('Fetchin all entry diaries');

    res.send('pong');
});

router.post('/', (_req, res) => {
    const x = _req.body;
    res.send('Saving a diary diariamente');
}  
);

export default router;