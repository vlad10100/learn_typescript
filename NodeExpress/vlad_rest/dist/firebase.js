"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyDuAdF7JIjSCQvJFVhu4KpbaRO2fp-BORE",
    authDomain: "forzaforzaforza-3fb61.firebaseapp.com",
    projectId: "forzaforzaforza-3fb61",
    storageBucket: "forzaforzaforza-3fb61.appspot.com",
    messagingSenderId: "144609460325",
    appId: "1:144609460325:web:806157142379ec969f068c",
    measurementId: "G-NESQ7V2HW4",
};
(0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)();
exports.db = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmlyZWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTZDO0FBQzdDLGtEQUE4RDtBQUU5RCxNQUFNLGNBQWMsR0FBRztJQUNyQixNQUFNLEVBQUUseUNBQXlDO0lBQ2pELFVBQVUsRUFBRSx1Q0FBdUM7SUFDbkQsU0FBUyxFQUFFLHVCQUF1QjtJQUNsQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xELGlCQUFpQixFQUFFLGNBQWM7SUFDakMsS0FBSyxFQUFFLDJDQUEyQztJQUNsRCxhQUFhLEVBQUUsY0FBYztDQUM5QixDQUFDO0FBRUYsSUFBQSxtQkFBYSxFQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlCLE1BQU0sRUFBRSxHQUFHLElBQUEsd0JBQVksR0FBRSxDQUFDO0FBRWpCLGdCQUFFIn0=