"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const category_1 = require("./routes/category");
const authGuard_1 = require("./middlewares/authGuard");
const app = (0, express_1.default)();
const port = 8888;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// app.use(
//   expressWinston.logger({
//     transports: [new winston.transports.Console()],
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.json({ space: 2 })
//     ),
//   })
// );
app.use(authGuard_1.authGuard);
app.use("/category", category_1.categoryRoute);
app.listen(port, () => {
    console.log("Server is running at port 8888");
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qiw4REFBcUM7QUFHckMsZ0RBQXdCO0FBQ3hCLGdEQUFrRDtBQUNsRCx1REFBb0Q7QUFFcEQsTUFBTSxHQUFHLEdBQXdCLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQzNDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUVsQixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztBQUVoQixXQUFXO0FBQ1gsNEJBQTRCO0FBQzVCLHNEQUFzRDtBQUN0RCxzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsQ0FBQztBQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSx3QkFBYSxDQUFDLENBQUM7QUFFcEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLEdBQUcsQ0FBQyJ9