import { app } from "./controller/app"
import { bikeRouter } from "./controller/routes/bikeRouter"

app.use('/bike', bikeRouter)