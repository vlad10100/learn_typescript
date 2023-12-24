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
    res.status(200).json(data.data());
}));
/**
 * Add a product
 */
productRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoryDocRef = (0, firestore_1.doc)(firebase_1.db, "category", id);
    const productRef = (0, firestore_1.collection)(categoryDocRef, "products");
    const payload = {
        name: "Product ni Vlad 1",
    };
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
    const payload = {
        name: "Product ni Vlad updated",
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3Byb2R1Y3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QiwwQ0FBaUM7QUFDakMsa0RBUTRCO0FBRTVCLE1BQU0sWUFBWSxHQUFHLGlCQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUE2RWxELG9DQUFZO0FBM0VyQjs7R0FFRztBQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQU8sR0FBb0IsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN4RCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMxQixNQUFNLGNBQWMsR0FBRyxJQUFBLGVBQUcsRUFBQyxhQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sVUFBVSxHQUFHLElBQUEsc0JBQVUsRUFBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLG1CQUFPLEVBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLGlCQUNsQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFDUCxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQ2IsQ0FBQyxDQUFDO0lBQ0osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBTyxHQUFvQixFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ25F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