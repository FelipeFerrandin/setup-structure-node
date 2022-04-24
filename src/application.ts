import express from "express"
import "../src/database/data-source/DatasourceApplication"
import CategoryRouter from "./category/CategoryRouter";
import ProductRouter from "./product/ProductRouter";
import cors from "cors"
import CorsConfigurationProvider from "./framework/providers/cors/CorsConfigurationProvider";

const app = express()

//CONFIGS
app.use(express.json())
app.use(cors(CorsConfigurationProvider.getCorsConfig()))

//ROUTERS
app.use("/produto", ProductRouter)
app.use("/categoria", CategoryRouter)

export {app}
