import { server } from "./server";
import dotenv from "dotenv";
server.listen(5052, () => {
  dotenv.config();
  console.clear();
  dotenv.config();
  console.log(`--Server ON--`);
});
