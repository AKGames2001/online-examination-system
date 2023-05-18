import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import express, { json } from "express";
// import { query } from "./config/db";
// import cors from "cors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const app = express();
// const PORT = 3002;
// app.use(cors());
// app.use(json());

// // Route to get all posts
// app.get("/api/get", (req, res) => {
//   query("SELECT * FROM users", (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// // Route to get one post
// app.get("/api/getFromId/:id", (req, res) => {
//   const id = req.params.id;
//   query("SELECT * FROM users WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// // Route for creating the post
// app.post("/api/create", (req, res) => {
//   const username = req.body.userName;
//   const title = req.body.title;
//   const text = req.body.text;

//   query(
//     "INSERT INTO users (title, post_text, user_name) VALUES (?,?,?)",
//     [title, text, username],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(result);
//     }
//   );
// });

// // Route to like a post
// app.post("/api/like/:id", (req, res) => {
//   const id = req.params.id;
//   query(
//     "UPDATE users SET likes = likes + 1 WHERE id = ?",
//     id,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(result);
//     }
//   );
// });

// // Route to delete a post

// app.delete("/api/delete/:id", (req, res) => {
//   const id = req.params.id;

//   query("DELETE FROM users WHERE id= ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });
