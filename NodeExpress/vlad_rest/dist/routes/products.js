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
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const firebase_1 = require("../firebase");
const firestore_1 = require("firebase/firestore");
const productRoute = express_1.default.Router({ mergeParams: true });
exports.productRoute = productRoute;
/**
 * Get category products
 */
productRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoryDocRef = (0, firestore_1.doc)(firebase_1.db, "category", id);
    const productRef = (0, firestore_1.collection)(categoryDocRef, "products");
    const data = yield (0, firestore_1.getDocs)(productRef);
    const resp = data.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
    res.status(200).json(resp);
}));
/**
 * Get product by ID
 */
productRoute.get("/:product_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_id, id } = req.params;
    const categoryDocRef = (0, firestore_1.doc)(firebase_1.db, "category", id);
    const productRef = (0, firestore_1.collection)(categoryDocRef, "products");
    const productDoc = (0, firestore_1.doc)(productRef, product_id);
    const data = yield (0, firestore_1.getDoc)(productDoc);
    console.log(data.data());
    res.status(200).json(data.data());
}));
/**
 * Add a product
 */
productRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoryDocRef = (0, firestore_1.doc)(firebase_1.db, "category", id);
    const productRef = (0, firestore_1.collection)(categoryDocRef, "products");
    const payload = req.body;
    yield (0, firestore_1.addDoc)(productRef, payload);
    res.status(200).json("Created a Product");
}));
/**
 * Update a product
 */
productRoute.put("/:product_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, product_id } = req.params;
    const categoryDocRef = (0, firestore_1.doc)(firebase_1.db, "category", id);
    const productRef = (0, firestore_1.collection)(categoryDocRef, "products");
    const productDoc = (0, firestore_1.doc)(productRef, product_id);
    const payload = req.body;
    yield (0, firestore_1.updateDoc)(productDoc, payload);
    res.status(200).json("updated a Product");
}));
/**
 * Delete a product
 */
productRoute.delete("/:product_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, product_id } = req.params;
    const categoryDocRef = (0, firestore_1.doc)(firebase_1.db, "category", id);
    const productRef = (0, firestore_1.collection)(categoryDocRef, "products");
    const productDoc = (0, firestore_1.doc)(productRef, product_id);
    yield (0, firestore_1.deleteDoc)(productDoc);
    res.status(200).json("deleted a Product");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3Byb2R1Y3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QiwwQ0FBaUM7QUFDakMsa0RBUTRCO0FBRTVCLE1BQU0sWUFBWSxHQUFHLGlCQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUEwRWxELG9DQUFZO0FBeEVyQjs7R0FFRztBQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQU8sR0FBb0IsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN4RCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMxQixNQUFNLGNBQWMsR0FBRyxJQUFBLGVBQUcsRUFBQyxhQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sVUFBVSxHQUFHLElBQUEsc0JBQVUsRUFBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLG1CQUFPLEVBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLGlCQUNsQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFDUCxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQ2IsQ0FBQyxDQUFDO0lBQ0osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBTyxHQUFvQixFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ25F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