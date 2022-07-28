import { RegisterMainpage } from "../styles/pages/register"
import Form from "../components/Form"
import Link from "next/link"

export default function Register(){
    
    
    return (
        <RegisterMainpage>
            <Form method={'register'}></Form>
        </RegisterMainpage>
    )
}