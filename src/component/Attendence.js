import { Box, Button, Card, Center, Container, Divider, Flex, Grid, Group, Image, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import NavBar from './NavBar'
const Url = "https://eventstaging.skoodos.com/api/1/guest-list"
export default function Attendence() {
    const [attendence, setattendance] = useState("")
    const studentList = () => {
        window.location.href = '/attendancelist';


    }

    useEffect(() => {
        try {
            fetch(Url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify({ 'phone': phone, 'password': password })
            }).then((response) => response.json()).then((responseJson) => {
                console.log(responseJson);


            });
        } catch (error) {
            console.error(error);
        }
    }, [])
    return (
        <>
            <Box sx={(theme) => ({
                background: "#09a2e5", height: "100vh", width: "100vw",
            })}>

                <Container pt="lg" width="40%" sx={(theme) => ({
                    height: "100%",
                    width: "100%",
                    "@media(max-width :768px)": {
                        width: "90%",
                        // background: "red"
                    }
                })} >
                    {/* <Button color='pink'> <AiOutlineArrowLeft size="md" /> </Button> */}

                    <Center mt={50}>

                        <Box>
                            {/* <Button color='red'> Hello</Button> */}

                            <Center>
                                <Text sx={(theme) => ({ color: "#fff", fontSize: "25px", fontWeight: 700 })}                            >
                                    ATTENDEE DETAILS
                                </Text>
                            </Center>
                            <Center>

                                <Text sx={(theme) =>
                                ({
                                    color: "#f2ff1c",
                                    fontSize: "20px",
                                    fontWeight: 700
                                })}>
                                    RAJESH KUMAR
                                </Text>
                            </Center>
                            <Box mt="lg">

                                <Center >

                                    <Button size='md' px={50} mr={15} radius={50} color='green' style={{ border: "1px solid #fff" }}>Awardee</Button>
                                    <Button size='md' px={50} ml={15} radius={50} color='green' style={{ border: "1px solid #fff" }} onClick={studentList}>Student</Button>

                                </Center>
                            </Box>


                        </Box>
                    </Center>



                    <Card shadow="sm" padding="lg" radius="md" withBorder mt={50}>

                        <Box maw="90%" mx="auto">


                            <Center mt={50}>

                                <Text
                                    sx={(theme) => ({
                                        color: "#d31360",
                                        fontSize: "25px",
                                        fontWeight: 700
                                    })}


                                > ALL ROUNDER



                                </Text>

                            </Center>
                            <Center>

                                <Text
                                    sx={(theme) => ({
                                        color: "#09a2e5",
                                        fontSize: "16px",
                                        fontWeight: 700
                                    })}


                                > PLAY GROUP</Text>


                            </Center>
                            <Box mt={25}>

                                <Divider my="sm" color='gray' variant="dashed" size="sm" />
                            </Box>
                            <Grid>
                                <Grid.Col md={6} lg={6} sm={6} xl={6} xs={6}>
                                    <Box mt={50}>


                                        <Text
                                            sx={(theme) => ({
                                                color: "gray",
                                                fontSize: "20px",
                                                // fontWeight:"bold"
                                            })}

                                        > School Name  </Text>
                                        <Text
                                            sx={(theme) => ({
                                                // color: "gray",
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}

                                        > Happy Model School</Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text
                                            sx={(theme) => ({
                                                color: "gray",
                                                fontSize: "20px",
                                                // fontWeight:"bold"
                                            })}

                                        > Phone</Text>
                                        <Text
                                            sx={(theme) => ({
                                                // color: "gray",
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}

                                        > 9876543210</Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text
                                            sx={(theme) => ({
                                                color: "gray",
                                                fontSize: "20px",
                                                // fontWeight:"bold"
                                            })}

                                        >Guest Ticket</Text>
                                        <Text
                                            sx={(theme) => ({
                                                // color: "gray",
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}

                                        >VVIP : <span style={{ color: "#d31360" }}>FREE</span> </Text>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col xs={6} md={6} lg={6} sm={6} xl={6}>
                                    <Box mt={50}>


                                        <Text
                                            sx={(theme) => ({
                                                color: "gray",
                                                fontSize: "20px",
                                                // fontWeight:"bold"
                                            })}

                                        > Email </Text>
                                        <Text
                                            sx={(theme) => ({
                                                // color: "gray",
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}

                                        >hiitechz07@gmail.com</Text>
                                    </Box>
                                    <Box mt={50}>


                                        <Text
                                            sx={(theme) => ({
                                                color: "gray",
                                                fontSize: "20px",
                                                // fontWeight:"bold"
                                            })}

                                        > # of Guest </Text>
                                        <Text
                                            sx={(theme) => ({
                                                color: "#d31360",
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}

                                        >4</Text>
                                    </Box>
                                    <Box mt={50} mb={50}>


                                        <Text
                                            sx={(theme) => ({
                                                color: "gray",
                                                fontSize: "20px",
                                                // fontWeight:"bold"
                                            })}

                                        > Check-In</Text>
                                        <Text
                                            sx={(theme) => ({
                                                color: "#1fb441",
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}

                                        >Yes</Text>
                                    </Box>
                                </Grid.Col>

                            </Grid>
                        </Box>
                    </Card>
                    <Center mt="lg">
                        <Button color='pink' size='lg' radius="md">

                            <Text color='#fff' size={18}>Check-In</Text>
                        </Button>
                    </Center>
                </Container>

            </Box >


        </>
    )
}
