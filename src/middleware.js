import {NextResponse} from "next/server";
import { VerifyToken } from "./utility/TokenHelper"; 
export async function middleware(req,res){
    try {
        const token=req.cookies.get('token');
        const payload=await VerifyToken(token['value'])
        const requestHeader=new Headers(req.headers);

        requestHeader.set('email',payload['email'])
        requestHeader.set('id',payload['id'])

        return NextResponse.next({request:{headers:requestHeader}})

    }catch (e) {
        if(req.nextUrl.pathname.startsWith("/api/")){   //matcher api gulor jonno, login na kore
            return NextResponse.json({status:'fail',data:'Unauthorized'},{status:401}); //postman ao dekha jay browser(just url modify and hit) ao dekha jay
        }
        else {
            return NextResponse.redirect(new URL('/user/login', req.url))
        }
    }

}

// browser url modify hit koreo jawa jay

export const config={
    matcher:[
        //middleware muloto login poroborti page/api gular jonno
        '/profile',
        '/comments',

        '/api/comments/manage',

        // '/api/user/profile', specific kore dite hobe
        '/api/user/profile/details',
        '/api/user/profile/update'

        //url modify kore api gulote jawa jay, ai api gulo bade, login sara
    ]
}