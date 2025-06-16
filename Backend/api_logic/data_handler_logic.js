const db = require("../DB/db_connection");

exports.getuser_login_data = async (name, table_name) => {
  try {
    const query = `SELECT * FROM ${table_name}`;  // Backticks for table name safety    
    const [rows] = await db.query(query);  // ✅ Await the result
    console.log(rows);
    
    return rows;  // Return first row or null
  } catch (error) {
    throw error;
  }
};






















// **********************************OTHERS WAY TO WRITE THIS LOGIC*******************************

// exports.getuser_login_data = async (name , table_name) => {
//   try {
//   const user_login_details = `SELECT * FROM ${table_name} WHERE name='${name}'`;
//     const [rows] = await db.execute(user_login_details, [name]);
    
//     if (rows.length > 0) {
//       return rows[0]; // Return the first matching user
//     } else {
//       return null; // No user found
//     }
//   } catch (error) {
//     console.error("Database query error:", error);
//     throw error; // Let the caller handle it
//   }
// };

// exports.getuser_login_data = async (name , table_name) => {
//     console.log(typeof("name"));
    
// const user_login_details = `SELECT * FROM ${table_name} WHERE name='${name}'`;
// console.log(user_login_details);

//  const [rows] = await db.execute(user_login_details, [name]);
 
//   console.log("Fetched rows =>", rows);
//   return rows.length ? rows[0] : null;
// };


// **********************************1ST WAY TO WRITE*******************************

// exports.getuser_login_data = async (name) => {
//   const sql = `SELECT * FROM USER_LOGIN_DETAILS WHERE ID = ?`;
//   const [rows] = await db.execute(sql, [name]);
//   console.log("Fetched rows =>", rows);
//   return rows.length ? rows[0] : null;
// };

// **********************************2ND WAY TO WRITE*******************************

// exports.getuser_login_data = async (id) => {
//   try {
//     const query = `SELECT * FROM USER_LOGIN_DETAILS WHERE ID = ?`;
//     const [rows] = await db.execute(query, [id]);
    
//     if (rows.length > 0) {
//       return rows[0]; // Return the first matching user
//     } else {
//       return null; // No user found
//     }
//   } catch (error) {
//     console.error("Database query error:", error);
//     throw error; // Let the caller handle it
//   }
// };

// **********************************3RD WAY TO WRITE*******************************

//  const sql = `select* from ${table} where ID =${id}`;
//   conn.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });