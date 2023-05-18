import { Avatar, Box, Button, Card, Center, Container, Divider, Flex, Grid, Group, Image, Tabs, Text, TextInput } from '@mantine/core'
import React from 'react'
import { BsFillCalendar2DateFill, BsSearch } from "react-icons/bs"
import { IoReloadOutline } from "react-icons/io5"
import { stockData } from "../data"
export default function AttendenceList() {
    const studentList = () => {
        window.location.href = '/attendancelist';
    }
    return (
        <>
            <Box sx={(theme) => ({
                background: "#09a2e5",
            })}>

                <Container sx={(theme) => ({
                    background: "#09a2e5",


                    padding: 20,

                })} >
                    <Box shadow="sm" padding="lg" m="md"  >
                        <Flex sx={() => ({
                            justifyContent: "space-between",

                        })} >
                            <Box>
                                <BsFillCalendar2DateFill size={50} color='#fff' />
                            </Box>
                            <Box mt="lg">
                                <Center>
                                    <Text sx={(theme) => ({
                                        fontSize: "30px",
                                        color: "#fff",
                                        fontWeight: "bolder"
                                    })}> ATTENDANCE LIST  </Text>
                                </Center>
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
                            <Box>
                                <IoReloadOutline size={50} color='#fff' />
                            </Box>

                        </Flex>
                    </Box>

                    <Box mx="auto">

                        <Box >
                            <Tabs activeTabColor="blue" underlineColor="blue" active={0} defaultValue="total" >
                                <Tabs.List activeTabColor="blue" underlineColor="blue" active={0} variant="default" px={5} sx={(theme) => ({ justifyContent: "space-between" })}>
                                    <Tabs.Tab value="total" sx={(theme) => ({ fontSize: "18px", color: "#f2ff1c", fontWeight: "bold" })}>Total</Tabs.Tab>
                                    <Tabs.Tab value="awardees" sx={(theme) => ({ fontSize: "18px", color: "#f2ff1c", fontWeight: "bold" })} >Awardee(s)</Tabs.Tab>
                                    <Tabs.Tab value="guest" sx={(theme) => ({ fontSize: "18px", color: "#f2ff1c", fontWeight: "bold" })} >Guest(s)</Tabs.Tab>
                                    <Tabs.Tab value="checked" sx={(theme) => ({ fontSize: "18px", color: "#f2ff1c", fontWeight: "bold" })}>Checked-In</Tabs.Tab>
                                </Tabs.List>
                                <Box sx={(theme) => ({ background: "#fff", padding: 20, })}>
                                    <TextInput
                                        icon={<BsSearch size={30} />}
                                        name='Serach '
                                        color='black'
                                        placeholder=' Search By / Name / Phone / ID'
                                        size="lg"
                                    />
                                    <Box mt={20}>

                                        {
                                            stockData.map((item, index) => {
                                                return (
                                                    <Box key={index}>
                                                        <Tabs.Panel value="total" >

                                                            <Box >
                                                                <Flex gap={10}>
                                                                    <Box p={3} sx={(theme) => ({
                                                                        background: "green",
                                                                        borderRadius: "20px",
                                                                        color: "#fff",
                                                                        fontSize: "18px",
                                                                        fontWeight: "bold"
                                                                    })}>
                                                                        <Text mx={10}> Award</Text>
                                                                    </Box>

                                                                    <Box p={3} sx={(theme) => ({
                                                                        background: "green",
                                                                        borderRadius: "20px",
                                                                        color: "#fff",
                                                                        fontSize: "18px",
                                                                        fontWeight: "bold"
                                                                    })}>

                                                                        <Text mx={10}> Award</Text>
                                                                    </Box>

                                                                    <Box p={3} sx={(theme) => ({
                                                                        background: "red",
                                                                        borderRadius: "50px",
                                                                        color: "#fff",
                                                                        fontSize: "18px",
                                                                        fontWeight: "bold"
                                                                    })}>

                                                                        <Text mx={10}>2</Text>
                                                                    </Box>
                                                                </Flex>
                                                                <Box mt={20}>


                                                                    <Flex sx={(theme) => ({ justifyContent: "space-between" })}>
                                                                        <Box>

                                                                            <Box>
                                                                                <Text
                                                                                    sx={(theme) => ({
                                                                                        color: "#09a2e5",
                                                                                        fontSize: "18px",
                                                                                        fontWeight: "bold"
                                                                                    })}
                                                                                >{item.name}</Text>
                                                                            </Box>
                                                                            <Box>
                                                                                <Text sx={(theme) => ({
                                                                                    fontSize: "18px",
                                                                                    // fontWeight: "bold"
                                                                                })}>{item.email}</Text>
                                                                            </Box><Box>
                                                                                <Text sx={(theme) => ({
                                                                                    fontSize: "18px",
                                                                                    // fontWeight: "bold"
                                                                                })}>{item.mobile}</Text>
                                                                            </Box>
                                                                        </Box>

                                                                        <Box mr={30} >
                                                                            <Center>

                                                                                <Avatar radius={100} size={70} />
                                                                            </Center>
                                                                            <Center>

                                                                                <Text sx={(theme) => ({ fontSize: "18px", fontWeight: "bold" })}>Check-In: <span style={{ color: "green" }}>Yes </span> </Text>
                                                                            </Center>
                                                                        </Box>
                                                                    </Flex>
                                                                    <Divider my="lg" color='#09a2e5' />
                                                                </Box>
                                                            </Box>
                                                        </Tabs.Panel>

                                                    </Box>
                                                )
                                            })
                                        }
                                        {
                                            stockData.map((item, index) => {
                                                return (
                                                    <Box key={index}>
                                                        <Tabs.Panel value="guest" >

                                                            <Box >
                                                                <Flex gap={10}>
                                                                    <Box p={3} sx={(theme) => ({ background: "yellow", borderRadius: "20px", color: "#fff", fontSize: "18px", fontWeight: "bold" })}>
                                                                        <Text mx={10}> Award</Text>
                                                                    </Box>
                                                                    <Box p={3} sx={(theme) => ({
                                                                        background: "black",
                                                                        borderRadius: "20px",
                                                                        color: "#fff",
                                                                        fontSize: "18px",
                                                                        fontWeight: "bold"
                                                                    })}>

                                                                        <Text mx={10}> Award</Text>
                                                                    </Box>

                                                                    <Box p={3} sx={(theme) => ({
                                                                        background: "red",
                                                                        borderRadius: "50px",
                                                                        color: "#fff",
                                                                        fontSize: "18px",
                                                                        fontWeight: "bold"
                                                                    })}>

                                                                        <Text mx={10}>2</Text>
                                                                    </Box>
                                                                </Flex>
                                                                <Box mt={20}>


                                                                    <Flex sx={(theme) => ({ justifyContent: "space-between" })}>
                                                                        <Box>

                                                                            <Box>
                                                                                <Text
                                                                                    sx={(theme) => ({
                                                                                        color: "#09a2e5",
                                                                                        fontSize: "18px",
                                                                                        fontWeight: "bold"
                                                                                    })}
                                                                                >{item.name}</Text>
                                                                            </Box>
                                                                            <Box>
                                                                                <Text sx={(theme) => ({
                                                                                    fontSize: "18px",
                                                                                    // fontWeight: "bold"
                                                                                })}>{item.email}</Text>
                                                                            </Box><Box>
                                                                                <Text sx={(theme) => ({
                                                                                    fontSize: "18px",
                                                                                    // fontWeight: "bold"
                                                                                })}>{item.mobile}</Text>
                                                                            </Box>
                                                                        </Box>

                                                                        <Box mr={30} >
                                                                            <Center>

                                                                                <Avatar radius={100} size={70} />
                                                                            </Center>
                                                                            <Center>

                                                                                <Text sx={(theme) => ({ fontSize: "18px", fontWeight: "bold" })}>Check-In: <span style={{ color: "green" }}>Yes </span> </Text>
                                                                            </Center>
                                                                        </Box>
                                                                    </Flex>
                                                                    <Divider my="lg" color='#09a2e5' />
                                                                </Box>
                                                            </Box>
                                                        </Tabs.Panel>

                                                    </Box>
                                                )
                                            })
                                        }  {
                                            stockData.map((item, index) => {
                                                return (
                                                    <Box key={index}>
                                                        <Tabs.Panel value="checked" >

                                                            <Box >
                                                                <Flex gap={10}>
                                                                    <Box p={3} sx={(theme) => ({ background: "yellow", borderRadius: "20px", color: "#fff", fontSize: "18px", fontWeight: "bold" })}>
                                                                        <Text mx={10}> Award</Text>
                                                                    </Box>
                                                                    <Box p={3} sx={(theme) => ({
                                                                        background: "black",
                                                                        borderRadius: "20px",
                                                                        color: "#fff",
                                                                        fontSize: "18px",
                                                                        fontWeight: "bold"
                                                                    })}>

                                                                        <Text mx={10}> Award</Text>
                                                                    </Box>

                                                                    <Box p={3} sx={(theme) => ({
                                                                        background: "red",
                                                                        borderRadius: "50px",
                                                                        color: "#fff",
                                                                        fontSize: "18px",
                                                                        fontWeight: "bold"
                                                                    })}>

                                                                        <Text mx={10}>2</Text>
                                                                    </Box>
                                                                </Flex>
                                                                <Box mt={20}>


                                                                    <Flex sx={(theme) => ({ justifyContent: "space-between" })}>
                                                                        <Box>

                                                                            <Box>
                                                                                <Text
                                                                                    sx={(theme) => ({
                                                                                        color: "#09a2e5",
                                                                                        fontSize: "18px",
                                                                                        fontWeight: "bold"
                                                                                    })}
                                                                                >{item.name}</Text>
                                                                            </Box>
                                                                            <Box>
                                                                                <Text sx={(theme) => ({
                                                                                    fontSize: "18px",
                                                                                    // fontWeight: "bold"
                                                                                })}>{item.email}</Text>
                                                                            </Box><Box>
                                                                                <Text sx={(theme) => ({
                                                                                    fontSize: "18px",
                                                                                    // fontWeight: "bold"
                                                                                })}>{item.mobile}</Text>
                                                                            </Box>
                                                                        </Box>

                                                                        <Box mr={30} >
                                                                            <Center>

                                                                                <Avatar radius={100} size={70} />
                                                                            </Center>
                                                                            <Center>

                                                                                <Text sx={(theme) => ({ fontSize: "18px", fontWeight: "bold" })}>Check-In: <span style={{ color: "green" }}>Yes </span> </Text>
                                                                            </Center>
                                                                        </Box>
                                                                    </Flex>
                                                                    <Divider my="lg" color='#09a2e5' />
                                                                </Box>
                                                            </Box>
                                                        </Tabs.Panel>
                                                    </Box>
                                                )
                                            })
                                        }  {
                                            stockData.map((item, index) => {
                                                return (
                                                    <Box key={index}>
                                                        <Tabs.Panel value="awardees" >

                                                            <Box >
                                                                <Flex gap={10}>
                                                                    <Box p={3} sx={(theme) => ({ background: "yellow", borderRadius: "20px", color: "#fff", fontSize: "18px", fontWeight: "bold" })}>
                                                                        <Text mx={10}> Award</Text>
                                                                    </Box>
                                                                    <Box p={3} sx={(theme) => ({
                                                                        background: "black",
                                                                        borderRadius: "20px",
                                                                        color: "#fff",
                                                                        fontSize: "18px",
                                                                        fontWeight: "bold"
                                                                    })}>

                                                                        <Text mx={10}> Award</Text>
                                                                    </Box>

                                                                    <Box p={3} sx={(theme) => ({
                                                                        background: "red",
                                                                        borderRadius: "50px",
                                                                        color: "#fff",
                                                                        fontSize: "18px",
                                                                        fontWeight: "bold"
                                                                    })}>

                                                                        <Text mx={10}>2</Text>
                                                                    </Box>
                                                                </Flex>
                                                                <Box mt={20}>


                                                                    <Flex sx={(theme) => ({ justifyContent: "space-between" })}>
                                                                        <Box>

                                                                            <Box>
                                                                                <Text
                                                                                    sx={(theme) => ({
                                                                                        color: "#09a2e5",
                                                                                        fontSize: "18px",
                                                                                        fontWeight: "bold"
                                                                                    })}
                                                                                >{item.name}</Text>
                                                                            </Box>
                                                                            <Box>
                                                                                <Text sx={(theme) => ({
                                                                                    fontSize: "18px",
                                                                                    // fontWeight: "bold"
                                                                                })}>{item.email}</Text>
                                                                            </Box><Box>
                                                                                <Text sx={(theme) => ({
                                                                                    fontSize: "18px",
                                                                                    // fontWeight: "bold"
                                                                                })}>{item.mobile}</Text>
                                                                            </Box>
                                                                        </Box>

                                                                        <Box mr={30} >
                                                                            <Center>

                                                                                <Avatar radius={100} size={70} />
                                                                            </Center>
                                                                            <Center>

                                                                                <Text sx={(theme) => ({ fontSize: "18px", fontWeight: "bold" })}>Check-In: <span style={{ color: "green" }}>Yes </span> </Text>
                                                                            </Center>
                                                                        </Box>
                                                                    </Flex>
                                                                    <Divider my="lg" color='#09a2e5' />
                                                                </Box>
                                                            </Box>
                                                        </Tabs.Panel>

                                                    </Box>
                                                )
                                            })
                                        }
                                    </Box>
                                </Box>
                            </Tabs>
                        </Box>
                    </Box>

                </Container>

            </Box>  padding:20


        </>
    )
}


