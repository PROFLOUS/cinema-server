const CustomerRepository = require('../repository/customer.repository');
const { FormateData, GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword,GenerateOTP } = require('../utils/auth.util');
const axios = require('axios');
require('dotenv').config();
const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
const Nexmo = require('nexmo')
const nexmo = new Nexmo({
  apiKey: "e0108785",
  apiSecret: "yIA1P9hbimnHFrZo"
})

class CustomerService {

    async SignUp(userInputs) {

        const { 
            email,password,phone,firstName,lastName,gender,address,
            HierarchyAddressDistrict_id,HierarchyAddressWard_id,
            HierarchyAddressCity_id,brithday 
        } = userInputs;
        
        // Check email is exist
        const isExist = await CustomerRepository.GetByEmail(email);
        const isPhoneExist = await CustomerRepository.GetByPhone(phone);
        if (isExist || isPhoneExist) {
            return {
                status: 400,
                message: 'Email or Phone is exist'
            }
        }

        // create salt
        let salt = await GenerateSalt();
        // create password
        let hashPassword = await GeneratePassword(password, salt);

        // create customer
        const newCustomer ={
            email,
            password: hashPassword,
            isActivated: false,
            phone,
            firstName,
            lastName,
            gender,
            address,
            HierarchyAddressDistrict_id,
            HierarchyAddressWard_id,
            HierarchyAddressCity_id,
            salt,
            brithday,
        }

        // await axios.post(
        //     'https://verify.twilio.com/v2/Services/VAb11f15d24cf4a10d1366dabe9e28bc37/Verifications',
        //     new URLSearchParams({
        //         'To': phone,
        //         'Channel': 'sms',
        //         'TemplateSid': 'HJd2847507a6104c1622eaccf1f949af7d'
        //     }),
        //     {
        //         auth: {
        //             username: 'AC0e7c8d2832975d02ccd53f237d3715ea',
        //             password: 'b79e3895091172fad67277a6a2d6f1f7'
        //         }
        //     }
        // );

        const existingCustomer = await CustomerRepository.CreateCustomer(newCustomer);

        const { id } = existingCustomer;
        const myPhone = existingCustomer.phone;
        this.sendOTP(id,myPhone);

        return {
            status: 200,
            message: "Account created OTP sended to mobile number",
            data: {
                id,
                email,
                phone,
                isActivated: existingCustomer.isActivated
            }
        }

    }

    async sendOTP(id,phone) {

        console.log("phone::"+phone);
        // const otp = GenerateOTP(6);
        // const otpTime = new Date();
        // otpTime.setMinutes(otpTime.getMinutes() + 1);
        // await CustomerRepository.UpdateCustomer(id, { phoneOtp: otp, otpTime: otpTime });
        // // send otp to phone

        twilio.verify.v2.services(process.env.TWILIO_VERIFY_SID)
                .verifications
                .create({
                    to: phone , 
                    channel: 'sms'})
                .then(verification => console.log(verification))
                .catch(err => console.log(err));

  
    }

    async checkOTP(sendOtp,dbOtp,otpTime) {
        if(!dbOtp) {
            return {
                status: 400,
                message: "OTP is not valid"
            }
        }

        if(new Date() > otpTime) {
            return {
                status: 400,
                message: "OTP is expired"
            }
        }

        if(sendOtp !== dbOtp) {
            return {
                status: 400,
                message: "OTP is not valid"
            }
        }
    }

    async VerifyOTP(userInputs) {
        const { id,otp,phone } = userInputs;
        // const { id,otp } = userInputs;
        // const existingCustomer = await CustomerRepository.GetById(id);
        // const { phoneOtp,otpTime } = existingCustomer;
        // const checkOTP = await this.checkOTP(otp,phoneOtp,otpTime);
        // if(checkOTP) {
        //     return checkOTP;
        // }
        // await CustomerRepository.UpdateCustomer(id, { isActivated: true });

        twilio.verify.v2.services(process.env.TWILIO_VERIFY_SID)
        .verificationChecks
        .create({ to: phone , code: otp})
        .then(verification => console.log(verification.status))
        .catch(err => console.log(err));

        await CustomerRepository.UpdateCustomer(id, { isActivated: true });

        return {
            status: 200,
            message: "Account is activated"
        }
    }

    async Login(userInputs) {
        const { email,password } = userInputs;
        const existingCustomer = await CustomerRepository.GetByEmail(email);
        
        if (!existingCustomer) {
            return {
                status: 400,
                message: 'Email is not exist'
            }
        }

        const validatePassword = await ValidatePassword(password, existingCustomer.password, );
        
        let hashPassword = await GeneratePassword(password, existingCustomer.salt);
        console.log(password, existingCustomer.password,hashPassword);
        if (validatePassword) {
            const token = await GenerateSignature({email:existingCustomer.email ,id:existingCustomer.id});
            return {
                status: 200,
                message: 'Login success',
                data: {
                    id: existingCustomer.id,
                    email: existingCustomer.email,
                    phone: existingCustomer.phone,
                    token,
                }
            }
        }else {
            return {
                status: 400,
                message: 'Password is not correct'
            }
        }

    }


}

module.exports = new CustomerService();