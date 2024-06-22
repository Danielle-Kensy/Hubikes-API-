import { app } from "./controller/app"
import { bikeRouter } from "./controller/routes/bikeRouter"
import { orderRouter } from "./controller/routes/orderRouter"
import { userRouter } from "./controller/routes/userRouter"

app.use('/bike', bikeRouter)
app.use('/user', userRouter)
app.use('/order', orderRouter)