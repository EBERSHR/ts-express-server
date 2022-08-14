import express from 'express';
import { db } from '../../firebase/firebase';
import { collection, DocumentData, getDocs, doc, getDoc } from "firebase/firestore";


const router = express.Router();

router.get('/', async (_req, res) => {

    const dbRef = collection(db, 'users');
    const usersList = await getDocs(dbRef);

    let list: DocumentData[] = [];

    usersList.forEach(user => {
        const data = user.data();
        list.push(data);

    });

    res.send(list);
});

router.get('/:id', async (_req, res) => {
    const { id } = _req.params;
    // ikAtLzifgebZpUu37Ffr5Qm7N5z1

    const dbRef = doc(db, `users/${id}`);
    const consulta = await getDoc(dbRef);

    res.send(consulta.data());

});

export default router;