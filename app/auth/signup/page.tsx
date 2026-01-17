import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card"
import {zodResolver} from "@hookform/resolvers/zod"
import {Controller, useForm} from "react-hook-form"
import {signupSchema} from "@/app/schemas/auth"
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";


export default function SignupPage (){

    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    })

    return(
       <Card>
        <CardHeader>
            <CardTitle>Create an account</CardTitle>
                <CardDescription>Enter your details to create your account</CardDescription>
            </CardHeader>

           <CardContent>
               <form >
                <FieldGroup>
                    <Controller name="name" control={ form.control} render={()=>(
                        <Field>
                            <FieldLabel>Username</FieldLabel>
                            <Input placeholder="Enter your username" {...field}/>
                            {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>

                    )} />
                </FieldGroup>
               </form>
           </CardContent>
        </Card>
    )
}