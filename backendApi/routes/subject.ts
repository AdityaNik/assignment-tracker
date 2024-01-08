import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const subjectSchema = new mongoose.Schema({
    name: String,
    Facaulty: String,
    UnitCount: {}
});

const Subjects = mongoose.model("Subjects", subjectSchema);

router.get('/dm', async (req, res) => {
    const subject = await Subjects.findOne({ name: "dm" });
    if (!subject) {
        res.json({
            messege: "subject not found"
        })
    }
    res.json({
        messege: "subject found",
        data: subject
    })
})

router.get('/ldco', async (req, res) => {
    const subject = await Subjects.findOne({ name: "ldco" });
    if (!subject) {
        res.json({
            messege: "subject not found"
        })
    }
    res.json({
        messege: "subject found",
        data: subject
    })
})

router.get('/bcn', async (req, res) => {
    const subject = await Subjects.findOne({ name: "bcn" });
    if (!subject) {
        res.json({
            messege: "subject not found"
        })
    }
    res.json({
        messege: "subject found",
        data: subject
    })
})

export default router;