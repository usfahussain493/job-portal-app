import {catchAsyncErrors} from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import {v2 as cloudinary} from "cloudinary";

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

        const existingUser = await User.findOne({email});
        if(existingUser){
            return next(new ErrorHandler("Email is already registered.", 400))
        }

        const userData = {
            name, 
            email,
            phone,
            address,
            password, 
            role, 
            niches:{
            firstNiche, 
            secondNiche, 
            thirdNiche,
            },
            coverLetter,
        };

        if(req.files && req.files.resume){
            const {resume}= req.files;
            if(resume){
                try {
                    const cloudinaryResponse =await cloudinary.uploader.upload(resume.tempFilesPath,
                        {folder: "Job_Seeker_Resume"}
                    ) 
                    if(!cloudinaryResponse || cloudinaryResponse.error){
                        return next(
                            new ErrorHandler("Failed toupload resume to cloud.", 500)
                        );
                    };

                    userData.resume = {
                        public_id: cloudinaryResponse.public_id,
                        url:cloudinaryResponse.secure_url
                    };
                    
                }catch (error) {
                    return next(new ErrorHandler("Failed to upload resume.", 500));
                }
            }
        }

    } catch (error) {
        
    }
})