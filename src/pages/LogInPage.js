import React, { useState } from 'react';
import { Box, Button, TextInput, Text, Center, ActionIcon, Anchor, Grid } from '@mantine/core';
import axios from 'axios';
const Url = "https://eventstaging.skoodos.com/api/login"

const LogInPage = () => {
    const [phone, setphone] = useState('');
    const [password, setPassword] = useState('');

    const handlephoneChange = (event) => {
        setphone(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('phone:', phone);
        console.log('Password:', password);
        const headers = {
            "Content-Type": "application/json",
            'Accept': 'application/json',

          };
      
          const bodyData = {
            phone:"8808647344",
            password:"420247"
          };
      

        axios.post(Url, bodyData, { headers })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <>
            <Box sx={(theme) => ({
                height: "100vh",
                width: "100vw",
                background: "#09a2e5",
                position: "relative",
                overflow: "hidden"

            })}>
                <Box sx={(theme) => ({
                    background: "#fff",
                    height: "80vh",
                    width: "30vw",
                    position: "absolute",
                    transform: "translate(-50%,-50%)",
                    top: "50%",
                    left: "50%",
                    borderRadius: "10px"
                })}>
                    <Center mt="80px">
                        <Box>
                            <Center mb={25}>
                                <Text sx={(theme) => ({
                                    fontSize: "80px",
                                    fontWeight: "bolder"
                                })}> <span >𝘴𝓴</span> <span style={{ color: "#f2ff1c" }}>ₒₒ</span><span>𝚍ₒ𝘴</span></Text>

                            </Center>
                            <Text sx={(theme) => ({
                                color: "black",
                                fontSize: "20px"
                            })}>Welcome to <span > <b> Skoodos Event </b></span></Text>
                            <Center>
                                <Box>
                                    <Text
                                        sx={(theme) => ({
                                            color: "black",
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
                                    color='black'
                                    placeholder="phone"
                                    value={phone}
                                    pattern="[0-9]{10}"
                                    size="lg"
                                    styles={{
                                        error: {
                                            color: 'pink',
                                        }
                                    }}
                                    onChange={handlephoneChange}

                                />

                            </Grid.Col>
                            <Grid.Col pt="xl">
                                <TextInput
                                    name='password'
                                    value={password}
                                    onChange={handlePasswordChange}

                                    size="lg" placeholder="Password"
                                    styles={{
                                        error: {
                                            color: 'pink',
                                        }
                                    }}
                                    rightSection={
                                        <ActionIcon >
                                        </ActionIcon>
                                    } />



                            </Grid.Col>
                        </Grid>
                        <Center mt="xl">
                            <Box>

                                <Anchor sx={(theme) => ({
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


        </>
    );
};

export default LogInPage;
