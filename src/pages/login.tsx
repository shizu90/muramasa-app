import Form from "../components/Form";
import { RegisterMainpage } from "../styles/pages/register";

export default function Login(){
    return (
        <RegisterMainpage>
            <Form method={'login'}></Form>
        </RegisterMainpage>
    )
}