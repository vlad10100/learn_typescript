"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.categories = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const credentials = require("../src/credentials.json");
const app = (0, app_1.initializeApp)({
    credential: (0, app_1.cert)(credentials),
});
const db = (0, firestore_1.getFirestore)(app);
exports.db = db;
const categories = db.collection("category");
exports.categories = categories;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmlyZWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBQXlEO0FBQ3pELHdEQUF3RDtBQUV4RCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUV2RCxNQUFNLEdBQUcsR0FBRyxJQUFBLG1CQUFhLEVBQUM7SUFDeEIsVUFBVSxFQUFFLElBQUEsVUFBSSxFQUFDLFdBQVcsQ0FBQztDQUM5QixDQUFDLENBQUM7QUFDSCxNQUFNLEVBQUUsR0FBRyxJQUFBLHdCQUFZLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFHUixnQkFBRTtBQUZ2QixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXBDLGdDQUFVIn0=