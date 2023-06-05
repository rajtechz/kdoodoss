import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Card, Center, Container, Divider, Flex, Grid, Group, Image, Loader, Tabs, Text, TextInput } from '@mantine/core'
import { BsFillCalendar2DateFill, BsSearch } from "react-icons/bs"
import { IoReloadOutline } from "react-icons/io5"
import { stockData } from "../data"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
const urlGuestList = "https://eventstaging.skoodos.com/api/1/guest-list"
export default function Awardees() {


    const [attendancelist, setAttendanceList] = useState([])
    // const [confirmMessage, setConfirmMessage] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {


        const fetchData = async () => {
            let token = await AsyncStorage.getItem('token');
            console.log(token)
            try {
                const response = await axios.post(urlGuestList, {
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${token}`,
                    }
                });
                console.log(response?.data)
                // console.log(response?.data?.data?.attendees[0].status)
                setAttendanceList(response?.data)
                // setConfirmMessage(response?.data)
                // console.log(attendancelist.success)

                if (response?.data.data) {

                }

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [])

    const guestDetail = () => {
        window.location.href = '/guestdetail';
    }
    return (
        <>
            {
                loading ? (
                    <Center>


                        <Loader color="#3498db" variant="bars" sx={(theme) => ({
                            height: "100vh",


                        })} />
                    </Center>

                ) :
                    <Box>
                        <Box sx={(theme) => ({
                            background: "#09a2e5",
                        })}>
                            <Container sx={(theme) => ({
                                background: "#09a2e5",
                                padding: 20,

                            })} >
                                <Box sx={(theme) => ({
                                    // position:"sticky",
                                    // top:"200px"
                                })}>
                                    <TextInput
                                        icon={<BsSearch size={30} />}
                                        name='Serach '
                                        color='black'
                                        placeholder=' Search By / Name / Phone / ID'
                                        size="xl"
                                    />
                                    <Center mt="md">
                                        <Center mt="xl">
                                            <Box>
                                                <Button radius="md" size='lg' type='submit' color="pink" px={50}>Search</Button>
                                            </Box>
                                        </Center>
                                    </Center>
                                </Box>
                                <Box shadow="sm"  m="md"  >
                                    <Flex sx={() => ({ justifyContent: "space-between", })} >
                                        <Box  >
                                            {/* <BsFillCalendar2DateFill size={50} color='#fff' /> */}
                                            <BsFillCalendar2DateFill
                                                size={window.innerWidth <= 768 ? 30 : 50}
                                                color="#fff"
                                                style={{ fontSize: window.innerWidth <= 768 ? '20px' : '50px' }}
                                            />
                                        </Box>
                                        <Box>
                                        
                                                <Text sx={(theme) => ({
                                                    fontSize: "30px",
                                                    color: "#fff",
                                                    fontWeight: "bolder",
                                                    textTransform: "uppercase",
                                                    justifyContent:"center",
                                                    "@media(max-width :768px)": {
                                                        fontSize: "18px",
                                                        marginLeft:10
        
                                                    }
                                                })}>
                                                    {attendancelist?.message}
                                                </Text>
                                       
                                        </Box>
                                        <Box>
                                            <IoReloadOutline  size={window.innerWidth <= 768 ? 30 : 50}
                                                color="#fff"
                                                style={{ fontSize: window.innerWidth <= 768 ? '20px' : '50px' }}/>
                                        </Box>
                                    </Flex>
                                    <Center>

                                        <Text

                                            sx={(theme) => ({
                                                fontSize: "18px",
                                                color: "#f2ff1c",
                                                fontWeight: "bold"
                                            })}
                                        > Twinkle Twinkle | Delhi | Session 1 </Text>
                                    </Center>
                                </Box>
                                <Box mx="auto">
                                    <Box >
                                        <Box sx={(theme) => ({ background: "#fff", padding: 20, })}>

                                            <Box mt={20}>
                                                <Box >

                                                    {
                                                        attendancelist?.data?.attendees?.map((item, index) => {

                                                            return (
                                                                <Box key={index} onClick={guestDetail}>
                                                                    <Flex gap={10}>
                                                                        <Box p={3} sx={(theme) => ({ background: "#E8590C", borderRadius: "20px", color: "#fff", fontSize: "18px", fontWeight: "bold" })}><Text mx={10}> Award</Text></Box>

                                                                        <Box p={3} sx={(theme) => ({ background: "green", borderRadius: "20px", color: "#fff", fontSize: "18px", fontWeight: "bold" })}><Text mx={10}> Award</Text></Box>

                                                                        <Box p={3} sx={(theme) => ({ background: "red", borderRadius: "50px", color: "#fff", fontSize: "18px", fontWeight: "bold" })}><Text mx={10}>{item.type}</Text></Box>
                                                                    </Flex>
                                                                    <Box mt={20}  >

                                                                        <Grid>
                                                                            <Grid.Col md={6} sm={6}>
                                                                                <Box>


                                                                                    <Box>
                                                                                        <Text
                                                                                            sx={(theme) => ({
                                                                                                color: "#09a2e5",
                                                                                                fontSize: "18px",
                                                                                                fontWeight: "bold"
                                                                                            })}
                                                                                        >
                                                                                            {item?.name}
                                                                                        </Text>
                                                                                    </Box>
                                                                                    <Box>
                                                                                        <Text sx={(theme) => ({
                                                                                            fontSize: "18px",
                                                                                        })}>

                                                                                            {item?.email}

                                                                                        </Text>
                                                                                    </Box>
                                                                                    <Box>
                                                                                        <Text sx={(theme) => ({
                                                                                            fontSize: "18px",
                                                                                        })}>

                                                                                            {item?.phone}

                                                                                        </Text>
                                                                                    </Box>
                                                                                </Box>
                                                                            </Grid.Col>
                                                                            <Grid.Col md={6} sm={6}  >

                                                                                <Box sx={(theme) => ({

                                                                                    marginLeft: "auto",
                                                                                    "@media(max-width :768px)": {

                                                                                    }
                                                                                })} >

                                                                                    <Avatar radius={100} size={70} />



                                                                                    <Text sx={(theme) => ({ fontSize: "18px", fontWeight: "bold", })}>Check-In: {item.status === 1 ? <span style={{ color: "green" }}> Yes </span> : <span style={{ color: "red" }}>No</span>} </Text>
                                                                                </Box>



                                                                            </Grid.Col>
                                                                        </Grid>

                                                                        <Divider my="lg" color='#09a2e5' />
                                                                    </Box>

                                                                </Box>
                                                            )
                                                        })
                                                    }

                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Container>
                        </Box >
                    </Box >

            }




        </>
    )
}
