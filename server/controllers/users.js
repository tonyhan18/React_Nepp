import conn from "../db/index.js";

export const postUsers = async function (req, res, next) {
  const { username, password } = req.body;
  const query = `SELECT * FROM user WHERE user_name='${username}'`;
  const [rows] = await conn.query(query);
  console.log(rows);
  return rows;
};
