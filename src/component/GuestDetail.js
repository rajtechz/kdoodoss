import { Box, Button, Card, Center, Container, Divider, Grid, Text } from '@mantine/core'
import axios from 'axios';
import React, { useEffect, useState, } from 'react'


export default function GuestDetail() {

    const [guest, setGuest] = useState("")
    const [attendence, setAttendance] = useState("")
    const [ticketType, setTicketType] = useState("")
    const [status, setStatus] = useState('')
    const [checkIn, setCheckIn] = useState("")
    useEffect(() => {
        const urlGuestDetail = `https://eventstaging.skoodos.com/api/1/attendes/2`;
        const token = "297|6ypQFt5rFbTSOzksXi16hkk0xpGAawquZpZNsivE"
        const fetchData = async () => {

            try {
                const response = await axios.post(urlGuestDetail, {
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${token}`,
                    }
                });
                // console.log("hello", response.data.name)
                setGuest(response.data)
                console.log(guest.message)

                // console.log(guest.message)
                // console.log(response.data.message)
                // console.log(response.data.data.token);
                // console.log(response.data.data.attendee)
                // console.log(response.data.data.attendee.name)

                setAttendance(response.data.data)
                // console.log(attendence)
                // console.log(attendence.attendee.name)
                // console.log(attendence.attendee.email)

                console.log(response.data.data.attendee.tickettype.name)

                setTicketType(response.data.data.attendee.tickettype.name)

                console.log(ticketType)
                console.log(response.data.data.attendee.status)
                setStatus(response.data.data.attendee.status)
                if (status === 1) {
                    setCheckIn("Yes")
                    console.log(checkIn)
                } else{
                    setCheckIn("No")
                }


            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [])
    return (
        <>
            <Box sx={(theme) => ({
                background: "#09a2e5", height: "100vh", width: "100vw", overflow: "hidden"
            })}>
                <Container pt="lg" width="40%" sx={(theme) => ({
                    height: "100%",
                    width: "100%",
                    "@media(max-width :768px)": {
                        width: "90%",

                    }
                })} >
                    <Center mt={50}>

                        <Box>


                            <Center>
                                <Text sx={(theme) => ({ color: "#fff", fontSize: "25px", fontWeight: 700 })}         >
                                    {guest.message}
                                </Text>
                            </Center>
                            <Center>

                                <Text sx={(theme) =>
                                ({
                                    color: "#f2ff1c",
                                    fontSize: "20px",
                                    fontWeight: 700
                                })}>
                                    {attendence.attendee.name}
                                </Text>
                            </Center>
                            <Box mt="lg">

                                <Center >
                                    <Button size='md' px={50} mr={15} radius={50} color='green' style={{ border: "1px solid #fff" }}>Awardee</Button>
                                    <Button size='md' px={50} ml={15} radius={50} color='green' style={{ border: "1px solid #fff" }} >Student</Button>

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
                                    })}> ALL ROUNDER
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

                                        >School Name</Text>
                                        <Text
                                            sx={(theme) => ({
                                                // color: "gray",
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}

                                        >
                                            {attendence.attendee.school_name}
                                            KD publick school
                                        </Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text
                                            sx={(theme) => ({
                                                color: "gray",
                                                fontSize: "20px",
                                            })}

                                        >Phone</Text>
                                        <Text
                                            sx={(theme) => ({
                                                // color: "gray",
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}

                                        >
                                            {attendence.attendee.phone}
                                        </Text>
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

                                        >{ticketType} </Text>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col xs={6} md={6} lg={6} sm={6} xl={6}>
                                    <Box mt={50}>


                                        <Text
                                            sx={(theme) => ({
                                                color: "gray",
                                                fontSize: "20px",
                                            })}

                                        > Email </Text>
                                        <Text
                                            sx={(theme) => ({
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}

                                        >
                                            {attendence.attendee.email}
                                        </Text>
                                    </Box>
                                    <Box mt={50}>


                                        <Text
                                            sx={(theme) => ({
                                                color: "gray",
                                                fontSize: "20px",
                                            })}

                                        > # of Guest </Text>
                                        <Text
                                            sx={(theme) => ({
                                                color: "#d31360",
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}

                                        >
                                            {attendence.attendee.type}

                                        </Text>
                                    </Box>
                                    <Box mt={50} mb={50}>
                                        <Text
                                            sx={(theme) => ({
                                                color: "gray",
                                                fontSize: "20px",
                                            })}

                                        > Check-In</Text>
                                        <Text
                                            sx={(theme) => ({
                                                color: "#1fb441",
                                                fontSize: "20px",
                                                fontWeight: "bold"
                                            })}
                                        >{checkIn}</Text>
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
