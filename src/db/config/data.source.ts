import { DataSource } from "typeorm"
import params from "./params";

const AppDataSource = new DataSource({
  ...params,
    migrations: [ 'src/db/migrations/**/*.ts' ],
})

export default AppDataSource;