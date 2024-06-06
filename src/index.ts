import { app } from "./controller/app"
import { bikeRouter } from "./controller/routes/bikeRouter"
import { userRouter } from "./controller/routes/userRouter"

app.use('/bike', bikeRouter)
app.use('/user', userRouter)