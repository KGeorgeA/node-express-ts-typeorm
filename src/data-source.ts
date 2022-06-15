import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "fusion_tech",
  password: "password",
  database: "NET_app",
  synchronize: true,
  logging: false,
  // entities: [User],
  entities: [__dirname + '/entity/*.{ts,js}'],
  migrations: [__dirname + '/migration/*.{ts,js}'],
  subscribers: [],
})
