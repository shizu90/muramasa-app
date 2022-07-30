import Button from './Button'
import useApi from '../hooks/useApi'
import {useEffect, useState} from "react";
import useCapitalize from '../hooks/useCapitalize';
import {Input} from "../styles/components/FormInput";
import FormInput from './FormInput';
import { useRouter } from "next/router";
import Link from 'next/link';

interface FormProps{
    method: string
}

export default function Form(props: FormProps) {
    const {login, register, status} = useApi()
    const {capitalize} = useCapitalize()
    const [values, setValues] = useState<any>({
        email: "",
        password: "",
        passwordConfirm: "",
        username: ""
    })
    const router = useRouter()

    const handleChange = (e: any) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleClickRegister = (e) => {
        register(values["email"], 
            values["password"], 
            values["passwordConfirm"], 
            values["username"])
        console.log(status)
        if(status && status.status === "success") {
            status.message = ""
            router.push("/login")
        }
        
    }
    const handleClickLogin = (e) => {
        e.preventDefault()
        login(values["email"], values["password"]).then(res => {
            if(res && res.status === "success") router.push("/")
        })
    }
    return (
        <>
        {props.method === 'register' ? 
            (
                <form onSubmit={e => handleClickRegister(e)}>
                    <FormInput 
                    type="text" 
                    name="email" 
                    labelName="Email: " 
                    onChange={handleChange} 
                    value={values["email"]}
                    placeholder="example@domain.com" 
                    errorMessage={(status && status.message.includes("email") ? [capitalize(status.message), "server"] : "") || ["Invalid email format", "client"]} 
                    pattern={"[a-z0-9]+@[a-z]+\.[a-z]{2,3}"}/>
                    <FormInput 
                    type="password" 
                    name="password" 
                    labelName="Password: " 
                    onChange={handleChange} 
                    value={values["password"]}
                    placeholder="Enter a password"
                    errorMessage={(status && status.message.includes("password") ? [capitalize(status.message), "server"] : "") || ["Password should have 6-14 chars", "client"]}
                    pattern={"^(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,14}$"}/>
                    <FormInput 
                    type="password" 
                    name="passwordConfirm" 
                    labelName="Confirm password: " 
                    onChange={handleChange} 
                    value={values["passwordConfirm"]}
                    placeholder="Enter password confirmation"
                    errorMessage={(status && status.message.includes("confirmation") ? [capitalize(status.message), "server"] : "") || ["Passwords don't match", "client"]}
                    pattern={values["password"]}/>
                    <FormInput 
                    type="text" name="username" 
                    labelName="Username: " 
                    onChange={handleChange} 
                    value={values["username"]}
                    placeholder="Enter an username"
                    errorMessage={(status && status.message.includes("username") ? [capitalize(status.message), "server"] : "") || ["Invalid username", "client"]}
                    pattern={"^[A-Za-z0-9]{2,14}$"}/>
                    <Button type={'submit'} value={"Register"}></Button>
                    <Link href={"/login"}>
                        Already have an account? Sign in here
                    </Link>
                </form>
            ):
            (
                <form onSubmit={e => handleClickLogin(e)}>
                    <FormInput 
                    type="text" 
                    name="email" 
                    labelName="Email: " 
                    onChange={handleChange} 
                    value={values["email"]}
                    placeholder="example@domain.com" 
                    errorMessage={(status && status.message.includes("email") ? [capitalize(status.message), "server"] : ["", "server"])} 
                    pattern={"[a-z0-9]+@[a-z]+\.[a-z]{2,3}"}/>
                    <FormInput 
                    type="password" 
                    name="password" 
                    labelName="Password: " 
                    onChange={handleChange} 
                    value={values["password"]}
                    placeholder="Enter a password"
                    errorMessage={(status && status.message.includes("password") ? [capitalize(status.message), "server"] : ["", "server"])}
                    pattern={"^(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,14}$"}/>
                    <Button type={'submit'} value={"Login"}></Button>
                    <Link href={"/register"}>
                        Don't have an account? Sign up here
                    </Link>
                </form>
            )}
        </>
    )
}