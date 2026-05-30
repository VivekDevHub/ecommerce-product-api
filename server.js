import app from "./src/app.js";
import envs from "./src/config/env.config.js";


app.listen(envs.PORT,() => {
    console.log(`Server is running on port : ${envs.PORT}`)
})