"use client"

import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardAction} from "@/components/ui/card"
import {zodResolver} from "@hookform/resolvers/zod"
import {Controller, useForm} from "react-hook-form"
import {signUpSchema} from "@/app/schemas/auth"
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";
import * as z from "zod";


export default function SignupPage (){

    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    async function onSubmit(data:z.infer<typeof signUpSchema>){
        await authClient.signUp.email({
            username: data.username,
            email: data.email,
            password: data.password,
        });
    }


    return(
        <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Create an account</CardTitle>
                <CardDescription>Enter your details to create your account</CardDescription>
            </CardHeader>
 
        <CardContent>
               <form onSubmit={form.handleSubmit(onSubmit)}>
                
                <FieldGroup className="gap-4">
                  
                    <Controller
                        name="username"
                        control={ form.control}
                        render={(field,fieldState)=>(
                        <Field>
                            <FieldLabel>Username</FieldLabel>
                            <Input 
                            aria-invalid={fieldState?.invalid}
                            placeholder="Joe Doe" {...field}
                            type ="text"
                            required
                            />
                            {fieldState?.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                        
                    )} />

                    <Controller
                        name="email"
                        control={ form.control}
                        render={(field,fieldState)=>(
                            <Field>
                                <FieldLabel>Email</FieldLabel>
                                <Input 
                                aria-invalid={fieldState?.invalid}
                                placeholder="JohnDoe@gmail.com" 
                                type="email" {...field}
                                required
                                />
                                {fieldState?.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )} />

                    <Controller
                        name="password"
                        control={ form.control}
                        render={(field,fieldState)=>(
                            <Field>
                                <FieldLabel>Password</FieldLabel>
                                <Input 
                                aria-invalid={fieldState?.invalid}
                                placeholder="........." type="password" {...field}/>
                                {fieldState?.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )} />

                    <Controller
                        name="confirmPassword"
                        control={ form.control}
                        render={(field,fieldState)=>(
                            <Field>
                                <FieldLabel>Confirm Password</FieldLabel>
                                <Input placeholder="............" type="password" {...field}/>
                                {fieldState?.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )} />

                    <Button>Sign up</Button>
                </FieldGroup>
               </form>
           </CardContent>
        </Card>
    )
}