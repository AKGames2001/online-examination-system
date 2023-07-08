import { createDB } from "../db.js";
import { readDB_login } from "../db.js";

function verifyData(urlData, dbData) {
  console.log(urlData.username);
  console.log(urlData.password);
  console.log({ dbData });

  if (
    urlData.username === dbData.username &&
    urlData.password === dbData.password
  ) {
    return true;
  } else {
    return false;
  }
}

async function login(db, data) {
  const urlData = data;
  const dbData = readDB_login(db, urlData.username);
  const validate = await verifyData(urlData, dbData);
  return validate;
}

function register(db, data) {
  const urlData = data;
  const response = createDB(db, "users", "row", urlData);
  return response;
}

export { login, register };
