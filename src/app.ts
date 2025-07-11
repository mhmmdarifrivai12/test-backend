import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/category.routes";
import { errorHandler } from "./middlewares/errorHandler";
import swaggerUi from "swagger-ui-express";
import palindromeRoutes from "./routes/palindrome.routes";
import catKittyRoutes from "./routes/catkitty.routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use(errorHandler);
app.use("/api/palindrome", palindromeRoutes);
app.use("/api/catkitty", catKittyRoutes);

export default app;
