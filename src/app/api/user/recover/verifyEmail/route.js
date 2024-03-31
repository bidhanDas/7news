import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
// import { SendEmail } from "@/utility/EmailHelper";

export async function GET(req,res){
    try {
        const {searchParams}=new URL(req.url);
        const email= searchParams.get('email');

        const prisma=new PrismaClient();

        const count=await prisma.users.count({where:{email:email}});

        if(count===1){
            // The Math.floor() method rounds a number DOWN to the nearest integer 1.9 = 1
            // Math.random() always returns a number lower than 1
            // Math.random() returns a random number between 0 (included) and 1 (excluded)
            const code=Math.floor(100000+Math.random()*900000); //100000(soho) theke 900000 ar modhe akta otp code generate hobe but not 900000 and but 100000
            // const EmailText=`Your OTP Code is=${code}`;
            // const EmailSubject="7news Verification Code";

            // await SendEmail(email,EmailText,EmailSubject);

            const result= await prisma.users.update({
                where:{email:email},
                data:{otp:code.toString()}
            })
            return  NextResponse.json({status:"success",data:result}) // one json object
        }

        else{
            return  NextResponse.json({status:"fail",data:"No user found"})
        }
    }catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}