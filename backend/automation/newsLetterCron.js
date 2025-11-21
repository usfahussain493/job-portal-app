import cron from "node-cron";


export const newsLetterCron = ()=>{
    cron.schedule("*/1 * * */ *", async()=>{
        console.log("Running News Letter Cron Automation.")
    })
}