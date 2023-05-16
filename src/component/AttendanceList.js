import { Box, Button, Card, Center, Container, Divider, Flex, Grid, Group, Image, Tabs, Text, TextInput } from '@mantine/core'
import React from 'react'
import { BsFillCalendar2DateFill, BsSearch } from "react-icons/bs"
import { IoReloadOutline } from "react-icons/io5"
export default function AttendenceList() {
    const studentList = () => {
        window.location.href = '/attendancelist';
    }
    return (
        <>
            <Box sx={(theme) => ({
                background: "black", height: "100vh", width: "100vw", overflow: "hidden"
            })}>

                <Container sx={(theme) => ({
                    // background: "#09a2e5",
                    background: "red",
                    height: "90%",
                    width: "100%",
                    padding: 20,
                    marginTop: 20,
                    "@media(max-width :768px)": {
                        width: "90%",
                    }
                })} >
                    <Box shadow="sm" padding="lg" m="md"  >
                        <Flex sx={() => ({
                            justifyContent: "space-between",

                        })} >
                            <Box>
                                {/* <BsFillCalendar2DateFill size={100} color='#fff' /> */}
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
                                {/* <IoReloadOutline size={100} color='#fff' /> */}
                            </Box>

                        </Flex>
                    </Box>

                    <Box maw="100%" mx="auto">
                        <Box >
                            <Tabs activeTabColor="blue" underlineColor="blue" active={0} variant="default"  >
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


                                        <Tabs.Panel value="total" >
                                            <Box >
                                                <Flex>
<Text> Award</Text>
<Text> Award</Text>
<Text> Award</Text>
                                                </Flex>

                                            </Box>
                                        </Tabs.Panel>

                                        <Tabs.Panel value="awardees" >
                                            Messages tab content
                                        </Tabs.Panel>

                                        <Tabs.Panel value="guest" >
                                            Settings tab content
                                        </Tabs.Panel>
                                        <Tabs.Panel value="checked" >
                                            Settings tab content Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, fugiat?
                                        </Tabs.Panel>
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
