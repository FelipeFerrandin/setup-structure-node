import {DataSource} from "typeorm";

export const AppDataSourceExample = new DataSource({
    type: "mysql",
    host: "test",
    port: 9999,
    username: "test",
    password: "test",
    database: "test",
    entities: ["src/**/*.Entity.ts"]
})

AppDataSourceExample.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
