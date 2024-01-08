import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import subject from './routes/subject'
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/', subject);

mongoose.connect('mongodb+srv://aadityanikam2004:I3LVVCBiEazcfHd5@cluster0.00dztjl.mongodb.net/', { dbName: "Demo" })
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})