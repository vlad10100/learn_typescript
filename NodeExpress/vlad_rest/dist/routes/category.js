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
    res.status(200).json(data.data());
}));
/**
 * Add a category
 */
categoryRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        name: "category 123",
    };
    const v = yield (0, firestore_1.addDoc)(categoryRef, payload);
    res.status(200).json("CREATE a CATEGORY");
}));
/**
 * Update a Category
 */
categoryRoute.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const docRef = (0, firestore_1.doc)(firebase_1.db, "category", id);
    const payload = {
        name: "edamame123",
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QiwwQ0FBaUM7QUFDakMsa0RBUTRCO0FBRTVCLHlDQUEwQztBQUMxQyxNQUFNLGFBQWEsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBaUVuRCxzQ0FBYTtBQWhFdEIsTUFBTSxXQUFXLEdBQUcsSUFBQSxzQkFBVSxFQUFDLGFBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUUvQzs7R0FFRztBQUNILGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxtQkFBTyxFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQkFDbkMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxFQUNkLENBQUMsQ0FBQztJQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzNDLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUEsZUFBRyxFQUFDLGFBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLGtCQUFNLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFFbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDekMsTUFBTSxPQUFPLEdBQUc7UUFDZCxJQUFJLEVBQUUsY0FBYztLQUNyQixDQUFDO0lBQ0YsTUFBTSxDQUFDLEdBQUcsTUFBTSxJQUFBLGtCQUFNLEVBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDM0MsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBQSxlQUFHLEVBQUMsYUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxNQUFNLE9BQU8sR0FBRztRQUNkLElBQUksRUFBRSxZQUFZO0tBQ25CLENBQUM7SUFDRixNQUFNLElBQUEscUJBQVMsRUFBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM5QyxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMxQixNQUFNLE1BQU0sR0FBRyxJQUFBLGVBQUcsRUFBQyxhQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sSUFBQSxxQkFBUyxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsdUJBQVksQ0FBQyxDQUFDIn0=