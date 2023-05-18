import { createConnection } from "mysql";
const db = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog_posts",
});

export default db;
