"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const subject_1 = __importDefault(require("./routes/subject"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', subject_1.default);
mongoose_1.default.connect('mongodb+srv://aadityanikam2004:I3LVVCBiEazcfHd5@cluster0.00dztjl.mongodb.net/', { dbName: "Demo" });
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
