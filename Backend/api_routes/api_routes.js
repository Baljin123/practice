const express = require("express");
const router = express.Router();
const res_handler = require("../api_response_handler/api_res_handler");


router.post(`/name_data` , res_handler.req_login_details);

module.exports = router;