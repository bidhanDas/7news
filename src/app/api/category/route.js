import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
export async function GET(req,res) {
    try{
        const prisma=new PrismaClient(); //object/instance create
        const result=await prisma.categories.findMany({orderBy:{id:'asc'}, select:{id:true,name:true}}) //sudhu id ar name show hobe bakigula asbe na
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}