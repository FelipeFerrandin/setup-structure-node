import {app} from "./application";
import dotenv from "dotenv"

function main() {
    dotenv.config()
    const port = Number(process.env.APPLICATION_PORT)
    if ([null, undefined, "", 0, {}, NaN].includes(port)) throw Error("A porta da aplicacao esta invalida")
    app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))
}

main()
