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
exports.categoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const firebase_1 = require("../firebase");
const firestore_1 = require("firebase/firestore");
const products_1 = require("./products");
const categoryRoute = express_1.default.Router({ mergeParams: true });
exports.categoryRoute = categoryRoute;
const categoryRef = (0, firestore_1.collection)(firebase_1.db, "category");
/**
 * Get all categories
 */
categoryRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, firestore_1.getDocs)(categoryRef);
    const resp = data.docs.map((item) => (Object.assign({ id: item.id }, item.data())));
    res.status(200).json(resp);
}));
/**
 * Get category by Id
 */
categoryRoute.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const docRef = (0, firestore_1.doc)(firebase_1.db, "category", id);
    const data = yield (0, firestore_1.getDoc)(docRef);
    res.status(200).json(Object.assign({ id: data.id }, data.data()));
}));
/**
 * Add a category
 */
categoryRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    yield (0, firestore_1.addDoc)(categoryRef, payload);
    res.status(200).json("CREATE a CATEGORY");
}));
/**
 * Update a Category
 */
categoryRoute.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const docRef = (0, firestore_1.doc)(firebase_1.db, "category", id);
    const payload = req.body;
    yield (0, firestore_1.updateDoc)(docRef, payload);
    res.status(200).json("Updated a Category");
}));
/**
 * Delete a Category
 */
categoryRoute.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const docRef = (0, firestore_1.doc)(firebase_1.db, "category", id);
    yield (0, firestore_1.deleteDoc)(docRef);
    res.status(200).json("Updated a Category");
}));
/**
 * Products
 */
categoryRoute.use("/:id/products", products_1.productRoute);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QiwwQ0FBaUM7QUFDakMsa0RBUTRCO0FBRTVCLHlDQUEwQztBQUMxQyxNQUFNLGFBQWEsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBZ0VuRCxzQ0FBYTtBQS9EdEIsTUFBTSxXQUFXLEdBQUcsSUFBQSxzQkFBVSxFQUFDLGFBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUUvQzs7R0FFRztBQUNILGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxtQkFBTyxFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQkFDbkMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxFQUNkLENBQUMsQ0FBQztJQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzNDLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUEsZUFBRyxFQUFDLGFBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLGtCQUFNLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFFbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLGlCQUNsQixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFDUixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQ2QsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDekIsTUFBTSxJQUFBLGtCQUFNLEVBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDN0MsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBQSxlQUFHLEVBQUMsYUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3pCLE1BQU0sSUFBQSxxQkFBUyxFQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUEsZUFBRyxFQUFDLGFBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsTUFBTSxJQUFBLHFCQUFTLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSx1QkFBWSxDQUFDLENBQUMifQ==