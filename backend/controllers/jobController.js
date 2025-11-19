import { catchAsyncErrors } from "../middlewares/catchAsyncError";
import ErrorHandler from "../middlewares/error";

export const postJob = catchAsyncErrors(async (req, res, next) => {
    const {
        title,
        jobType,
        location,
        companyName,
        introduction,
        responsibilities,
        qualifications,
        offers,
        salary,
        hiringMultipleCandidates,
        personalWebsite,
        jobNiche,
        newsLetterSent,
    } = req.body;

    if (
        !title ||
        !jobType ||
        !location ||
        !companyName ||
        !introduction ||
        !responsibilities ||
        !qualifications ||
        !salary ||
        !jobNiche 
    ) {
        return next(new ErrorHandler("Please provide full job details.", 400))
    }
    if ((personalWebsiteTitle && !personalWebsiteUrl) || 
       (!personalWebsiteTitle && personalWebsiteUrl)
    ) {
        return next(
            new ErrorHandler(
                "Provide both the website url and title, or leave both blank.", 400
            )
        );
    }

});