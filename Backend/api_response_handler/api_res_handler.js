const get_db_data = require("../api_logic/data_handler_logic");

exports.req_login_details = async (req , res) => {

  const check_data = await req.body.name; 
  const table_name = await req.body.tablename; 
  
   const login_data = await get_db_data.getuser_login_data(check_data , table_name);
       if (login_data == "") {
        console.log("res handler");
        
         return res.status(404).json({Note : "No Data Avaliable"});
       
        } else {
         return res.status(200).json(login_data);
       }
}