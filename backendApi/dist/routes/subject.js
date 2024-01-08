"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router = express_1.default.Router();
const subjectSchema = new mongoose_1.default.Schema({
    name: String,
    Facaulty: String,
    UnitCount: {}
});
const Subjects = mongoose_1.default.model("Subjects", subjectSchema);
router.get('/dm', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subject = yield Subjects.findOne({ name: "dm" });
    if (!subject) {
        res.json({
            messege: "subject not found"
        });
    }
    res.json({
        messege: "subject found",
        data: subject
    });
}));
router.get('/ldco', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subject = yield Subjects.findOne({ name: "ldco" });
    if (!subject) {
        res.json({
            messege: "subject not found"
        });
    }
    res.json({
        messege: "subject found",
        data: subject
    });
}));
router.get('/bcn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subject = yield Subjects.findOne({ name: "bcn" });
    if (!subject) {
        res.json({
            messege: "subject not found"
        });
    }
    res.json({
        messege: "subject found",
        data: subject
    });
}));
exports.default = router;
