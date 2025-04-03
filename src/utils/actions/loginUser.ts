"use server";
import { FormValues } from "@/app/login/page";

export const loginUser = async(data : FormValues)=>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
    
    });
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const userInfo = await res.json();
    return userInfo;
}