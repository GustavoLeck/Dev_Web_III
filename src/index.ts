import { server } from "./server";
import dotenv from "dotenv";
server.listen(5050, () => {
  dotenv.config();
  console.clear();
  dotenv.config();
  console.log(`--Server ON--`);
});
