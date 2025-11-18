import {catchAsyncErrors} from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";

export const register = catchAsyncErrors(async(req, res, next)=>{
    try {
        const {
            name, 
            email,
            phone,
            address,
            password, 
            role, 
            firstNiche, 
            secondNiche, 
            thirdNiche, 
            coverLetter,
        } =req.body;

        if(!name || !email || !phone || !address || !role){
            return next(new ErrorHandler("All fields are required.", 400));
        }
        if(role === "Job Seeker" && (!firstNiche || !secondNiche || !thirdNiche)){
            return next(new ErrorHandler("Please provide your preffered Job niches.", 400))
        }
    } catch (error) {
        
    }
})