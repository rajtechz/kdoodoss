import React, { useEffect } from 'react'
import { Avatar, Box, Button, Card, Center, Container, Divider, Flex, Grid, Group, Image, Tabs, Text, TextInput } from '@mantine/core'
import { BsFillCalendar2DateFill, BsSearch } from "react-icons/bs"
import { IoReloadOutline } from "react-icons/io5"
import { stockData } from "../data"
const url ="https://eventstaging.skoodos.com/api/1/attendes/77"

export default function Guest() {


  useEffect(() => {
    try {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({ 'name': name, 'password': password })
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson);
        });
    } catch (error) {
        console.error(error);
    }
}, [])

  return (
    <>
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
              
                <Center mt="xl">
                  <Box>
                    <Button radius="md" size='lg' type='submit' color="pink" px={50}>Search</Button>
                  </Box>
                </Center>
            </Box>
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

                <Box sx={(theme) => ({ background: "#fff", padding: 20, })}>

                  <Box mt={20}>

                    {
                      stockData.map((item, index) => {
                        return (
                          <Box key={index}>

                            <Box >
                              <Flex gap={10}>
                                <Box p={3} sx={(theme) => ({
                                  background: "#e98400",
                                  borderRadius: "20px",
                                  color: "#fff",
                                  fontSize: "18px",
                                  fontWeight: "bold"
                                })}>
                                  <Text mx={10}> Award</Text>
                                </Box>

                                <Box p={3} sx={(theme) => ({
                                  background: "#e98400",
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
                          </Box>
                        )
                      })
                    }

                  </Box>
                </Box>

              </Box>
            </Box>
          </Container>

        </Box>



      </Box>

    </>
  )
}
