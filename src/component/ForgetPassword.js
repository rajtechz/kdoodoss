import { Anchor, Box, Button, Center, TextInput, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';


const url = "https://eventstaging.skoodos.com/api/forget"
export default function ForgetPassword() {
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState("");

    const handleMobileNumberChange = (e) => {
        setPhone(e.target.value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(phone)
        setErrors("");
        const mobileRegex = /^\d{10}$/;
        if (!phone.match(mobileRegex)) {
            setErrors('Invalid mobile number format.');
        }

        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'phone': phone, })
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                });
        } catch (error) {
            console.error(error);
        }
    }
    const loginWithPassword = () => {
        window.location.href = '/';
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
                                <Center>
                                    <Text sx={(theme) => ({
                                        color: "#fff",
                                        fontSize: "20px"
                                    })}>
                                        Forget  <span > <b> Password ? </b></span>

                                    </Text>
                                </Center>
                                <Center>
                                    <Box>
                                    </Box>
                                </Center>
                                <Center mt="xs"

                                    sx={(theme) => ({
                                        color: "#f2ff1c",
                                        fontSize: "20px"
                                    })} >
                                    <Text>Please Enter Your Mobile Number</Text>
                                </Center>
                            </Box>
                        </Center>
                        <Box mt="50px" mx="auto" component="form"
                            onSubmit={handleSubmit}
                            sx={(theme) => ({
                                width: "90%",
                                height: "100%",
                            })}>
                            <TextInput color='black' size='lg'
                                placeholder="Mobile"
                                value={phone}
                                onChange={handleMobileNumberChange}
                                pattern="[0-9]{10}"
                                styles={{error: {color: "#fff",}}} />
                            <Text >
                                {errors && <Text style={{ color: "red" }}>{errors}</Text>}
                            </Text>
                            <Center mt="50px">
                                <Box>

                                    <Button radius="md" size='lg' type='submit' color="pink" px={50}>
                                        Submit
                                    </Button>
                                </Box>

                            </Center>
                            <Center mt="40px">
                                <Box>

                                    <Anchor onClick={loginWithPassword} sx={(theme) => ({
                                        color: "#f2ff1c",
                                        fontSize: "20px"
                                    })}>
                                        Log In With Password
                                    </Anchor>
                                </Box>
                            </Center>
                        </Box>





                    </Box>
                </Box>

            </Box>




        </>
    )
}
