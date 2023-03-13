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
) => {
  return await bcrypt.compare(enteredPassword, savedPassword);
};

(module.exports.GenerateSignature = async (payload, tokenSecret, tokenLife) => {
  return await jwt.sign(payload, tokenSecret, { expiresIn: tokenLife });
}),
  (module.exports.ValidateSignature = async (req) => {
    const signature = req.get("Authorization");

    if (signature) {
      try {
        const payload = await jwt.verify(
          signature,
          process.env.ACCESS_TOKEN_SECRET
        );
        req.user = payload;
        return true;
      } catch (error) {
        return false;
      }
    }

    return false;
  });

module.exports.ValidateSignatureWithAccess = async (req) => {
  let signature = req.get("Authorization");
    if (signature) {
      signature = signature.split(" ")[1];
      try {
        const payload = await jwt.verify(
          signature,
          process.env.ACCESS_TOKEN_SECRET
        );
        return payload;
      } catch (error) {
        throw new Error("Invalid Token!");
      }
    }

    throw new Error("Invalid Token!");
};

module.exports.ValidateSignatureRefresh = async (refreshToken) => {
  const payload = await jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET
  );
  return payload;
};

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
