import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
export async function POST(req,res){
    try {
        const reqBody=await req.json(); //email & otp
        const prisma=new PrismaClient();
        const count=await prisma.users.count({where:reqBody});
        if(count===1){
            return  NextResponse.json({status:"success",data:"Valid OTP Code"})
        }
        else {
            return  NextResponse.json({status:"fail",data:"Invalid OTP Code"})
        }

    }catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}