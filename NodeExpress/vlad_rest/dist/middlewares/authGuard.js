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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuard = void 0;
const authGuard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Do the logic
    const result = true;
    if (!result)
        return res.status(403).json("403 Forbidden");
    return next();
});
exports.authGuard = authGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aEd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL2F1dGhHdWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFTyxNQUFNLFNBQVMsR0FBRyxDQUN2QixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQixFQUMxQixFQUFFO0lBQ0YsZUFBZTtJQUNmLE1BQU0sTUFBTSxHQUFZLElBQUksQ0FBQztJQUM3QixJQUFJLENBQUMsTUFBTTtRQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFMUQsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUEsQ0FBQztBQVZXLFFBQUEsU0FBUyxhQVVwQiJ9