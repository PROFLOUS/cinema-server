const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


(module.exports.GenerateSalt = async () => {
    return await bcrypt.genSalt();
}),

(module.exports.GeneratePassword = async (password, salt) => {
    return await bcrypt.hash(password, salt);
});
  
module.exports.ValidatePassword = async (
    enteredPassword,
    savedPassword,
    salt
) =>{
    return await bcrypt.compare(enteredPassword, savedPassword);
};
  
(module.exports.GenerateSignature = async (payload) => {
    return await jwt.sign(payload, process.env.APP_SECRET, { expiresIn: "1d" });
}),

  
(module.exports.ValidateSignature = async (req) => {
    const signature = req.get("Authorization");

    if (signature) {
    const payload = await jwt.verify(signature.split(" ")[1], APP_SECRET);
    req.user = payload;
    return true;
    }

    return false;
});
  
module.exports.FormateData = (data) => {
if (data) {
    return { data };
} else {
    throw new Error("Data Not found!");
}
};

module.exports.GenerateOTP = (otp_length) => {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < otp_length; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
  return OTP;
};

