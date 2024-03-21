'use server'
import { RegisterInputProps } from "@/types/types";

 


export async function CreateUser (formData:RegisterInputProps){
    const resend =new Reswnd(process.env.RESEND_API_KEY)
    const {username, email,password} =formData
} 