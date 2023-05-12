import { ActionIcon, Anchor, Box, Button, Center, Grid, Text, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { useForm } from '@mantine/form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);


    const form = useForm({
        initialValues: {
            mobile: "",
            password: "",
        },
        validate: {
            mobile: (value) => (/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(value) ? null : 'Invalid email'),
            password: (value) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) ? null : 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'),

        },
    });
    const register = async (value) => {
        await fetch('http://localhost:8000/register', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value)
        }).then(function (a) {
            return a.json()
        })
            .then(function (json) {
                console.log(json)
            })
    }

    const forgetPassword=()=>{
        window.location.href = '/forgetpassword';
    }
    return (
        <>
            <Box>
                <Box
                    sx={(theme) => ({
                        height: "100vh",
                        width: "100vw",
                        position: "relative",
                    })}>
                    <Box
                        sx={(theme) => ({
                            borderRadius: "10px",
                            background: "#09a2e5",
                            height: "80vh",
                            width: "30vw",
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            "@media(max-width : 768px)": {
                                width: "100vw",
                                height: "100vh",
                                background: "#09a2e5"
                            }
                        })} >
                        <Center mt="80px">
                            <Box>
                                <Center mb={25}>
                                    <Text sx={(theme) => ({
                                        fontSize: "80px",
                                        fontWeight:"bolder"
                                    })}> <span >𝘴𝓴</span> <span style={{ color: "#f2ff1c" }}>ₒₒ</span><span>𝚍ₒ𝘴</span></Text>

                                </Center>

                                <Text sx={(theme) => ({
                                    color: "#fff",
                                    fontSize: "20px"
                                })}>

                                    Welcome to <span > <b> Skoodos Event </b></span>

                                </Text>
                                <Center>
                                    <Box>

                                        <Text
                                            sx={(theme) => ({
                                                color: "#fff",
                                                fontSize: "20px"
                                            })}>
                                            <b>   Check In App! </b> <br />

                                        </Text>

                                    </Box>

                                </Center>
                                <Center mt="xs"

                                    sx={(theme) => ({
                                        color: "#f2ff1c",
                                        fontSize: "20px"
                                    })} >
                                    <Text>Log In With Password </Text>
                                </Center>
                            </Box>
                        </Center>
                        <Box mt="lg" mx="auto" component="form"
                            // onSubmit={form.onSubmit((value) => form.reset(console.log(value)))}
                            onSubmit={form.onSubmit((value) => { register(value) })}
                            sx={(theme) => ({

                                width: "90%",
                                height: "100%",
                            })}>
                            <Center>
                                <Grid>
                                    <Grid.Col>
                                        <TextInput color='black' 
                                            placeholder="Mobile"
                                            {...form.getInputProps('mobile')}
                                            error={form.errors.mobile}
                                            pattern="[0-9]{10}"
                                            size="md" />
                                    </Grid.Col>
                                    <Grid.Col pt="50px">
                                        <TextInput placeholder="Password"
                                            type={showPassword ? 'text' : 'password'}
                                            styles={{
                                                placeholder: {
                                                    color: 'red',
                                                }
                                            }}
                                            {...form.getInputProps('password')}
                                            error={form.errors.password}
                                            size="md"
                                            rightSection={
                                                <ActionIcon onClick={toggleShowPassword}>
                                                    {showPassword ? <AiFillEyeInvisible size="lg" /> : <AiFillEye size="lg" />}
                                                </ActionIcon>
                                            }

                                        />

                                    </Grid.Col>
                                </Grid>
                            </Center>
                            <Center mt="xl">
                                <Box>

                                    <Anchor onClick={forgetPassword} sx={(theme) => ({
                                        color: "#f2ff1c",
                                        fontSize: "20px"
                                    })}>
                                        Forget Password
                                    </Anchor>
                                </Box>
                            </Center>
                            <Center mt="xl">

                                <Box>

                                    <Button radius="md" size='lg' type='submit' color="pink" px={50}>
                                        Submit
                                    </Button>
                                </Box>
                            </Center>
                        </Box>





                    </Box>
                </Box>

            </Box>
        </>
    )
}
