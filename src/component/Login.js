import { ActionIcon, Anchor, Box, Button, Center, Grid, Text, TextInput } from '@mantine/core'
import axios from 'axios';
import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const Url = "https://eventstaging.skoodos.com/api/login"
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');


    const handleMobileNumberChange = (e) => {
        setPhone(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
         e.preventDefault()
        try {
         await   fetch(Url, {
                method: 'POST',
                headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                },
               body: JSON.stringify({'phone': phone, 'password': password})
               }).then((response) => response.json())
               .then((responseJson) => {
                         console.log(responseJson);
              });
        } catch (error) {
            console.error(error);
        }
    }
    const forgetPassword = () => {
        window.location.href = '/forgetpassword';
    }
    return (
        <>
            <Box sx={(theme) => ({
                overflow: 'hidden'
            })}>
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
                                        fontWeight: "bolder"
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
                            onSubmit={handleSubmit}
                            sx={(theme) => ({ width: "90%", height: "100%", })}>

                            <Grid>
                                <Grid.Col>
                                    <TextInput
                                        name='password'
                                        value={phone}
                                        onChange={handleMobileNumberChange}
                                        color='black'
                                        placeholder="Mobile"
                                        pattern="[0-9]{10}"
                                        size="lg"
                                        styles={{
                                            error: {
                                                color: 'pink',
                                            }
                                        }} />
                                </Grid.Col>
                                <Grid.Col pt="xl">
                                    <TextInput
                                        name='password'
                                        value={password}
                                        onChange={handlePasswordChange}

                                        size="lg" placeholder="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        styles={{
                                            error: {
                                                color: 'pink',
                                            }
                                        }}
                                        rightSection={
                                            <ActionIcon onClick={toggleShowPassword}>
                                                {showPassword ? <AiFillEyeInvisible size="lg" /> : <AiFillEye size="lg" />}
                                            </ActionIcon>
                                        } />

                                </Grid.Col>
                            </Grid>
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
                                    <Button radius="md" size='lg' type='submit' color="pink" px={50}>Submit</Button>
                                </Box>
                            </Center>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    )
}
