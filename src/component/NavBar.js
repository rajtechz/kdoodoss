import { Center, Flex, List, Navbar, Text, createStyles, Drawer, Box, Burger, Divider } from "@mantine/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiUserSettingsLine } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
const url = "https://eventstaging.skoodos.com/api/logout"
export default function NavBar() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };
    const { classes } = useStyle()
    const profileSetting = () => {
        window.location.href = "./setting"
    }
    const handleLogout = async (e) => {
        e.preventDefault()
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify({})
            }).then((response) => response.json()).then((responseJson) => {
                console.log(responseJson);
            });
        } catch (error) {
            console.error(error);
        }
        window.location.href = "/"
    }
    return(
        <>
            <Navbar className={classes.navbar}>
                <Box className={classes.headerBox}>
                </Box>
                <Box style={{ display: "flex", height: "100%", }}>
                    <Box className={classes.logoBox}>
                        <Center>
                            <Box>
                                <Flex className={classes.logoBox2}>
                                    <Box>
                                        <NavLink className={classes.logo}>
                                            <RiUserSettingsLine size={40} onClick={profileSetting} />
                                            <Text sx={(theme) => ({ fontSize: "14px", color: "black", fontWeight: "normal" })}>Profile Setting</Text>
                                        </NavLink>
                                    </Box>
                                </Flex>
                            </Box>
                        </Center>
                    </Box>
                    <Box className={classes.menubar}>
                        <Center>
                            <List>
                                <Flex className={classes.navcollection}>
                                    <List.Item sx={(theme) => ({ listStyle: "none" })}>
                                        <NavLink to="/total" className={classes.navitem}> Total</NavLink>
                                    </List.Item>
                                    <List.Item sx={(theme) => ({ listStyle: "none" })}>
                                        <NavLink to="/awardees" className={classes.navitem}>Awardee</NavLink>
                                    </List.Item>
                                    <List.Item sx={(theme) => ({ listStyle: "none" })}>
                                        <NavLink to="/guest" className={classes.navitem}> Guest</NavLink>
                                    </List.Item>
                                    <List.Item sx={(theme) => ({ listStyle: "none" })}>
                                        <NavLink to="/checked" className={classes.navitem}> Checked</NavLink>
                                    </List.Item>
                                    <List.Item sx={(theme) => ({ listStyle: "none" })}>
                                        <NavLink to="/arived" className={classes.navitem}>Arived </NavLink>
                                    </List.Item>

                                </Flex>
                            </List>
                        </Center>
                    </Box>
                    <Box className={classes.togalBox}>
                        <Center >
                            <Box>
                                <Flex className={classes.togalBox2}>
                                    <Burger
                                        opened={open}
                                        onClick={() => setOpen((o) => !o)}

                                        color="#fff"
                                        zIndex={100} />
                                    <Drawer.Root
                                        opened={open}
                                        onClose={toggleDrawer}
                                        size={350}
                                        overlayProps={{ opacity: 0.4 }}>
                                        <Drawer.Content style={{ backgroundColor: "#fff", color: "#fff" }}>
                                            <Drawer.Header style={{ backgroundColor: "#fff" }}>
                                                <Drawer.CloseButton size="lg" style={{ color: "#fff", background: "none" }} />
                                            </Drawer.Header>
                                            <Drawer.Body mt={100}>
                                                <Center>
                                                    <List>
                                                        <List.Item>
                                                            <NavLink to="/" className={classes.drawerItem} > Home</NavLink>

                                                        </List.Item>
                                                        <Divider mb="xs" mt="xs" />


                                                        <List.Item>
                                                            <NavLink to="/about" className={classes.drawerItem}> About</NavLink>
                                                        </List.Item>
                                                        <Divider mb="xs" mt="xs" />
                                                        <List.Item>
                                                            <NavLink to="/service" className={classes.drawerItem}> Service</NavLink>
                                                        </List.Item>
                                                        <Divider mb="xs" mt="xs" />
                                                        <List.Item>
                                                            <NavLink to="/tips" className={classes.drawerItem}> Tips</NavLink>
                                                        </List.Item>
                                                        <Divider mb="xs" mt="xs" />

                                                        <List.Item>
                                                            <NavLink to="/contact" className={classes.drawerItem}> Contact</NavLink>
                                                        </List.Item>
                                                        <Divider mb="xs" mt="xs" />
                                                    </List>
                                                </Center>
                                            </Drawer.Body>
                                        </Drawer.Content>
                                    </Drawer.Root>
                                </Flex>
                            </Box>
                        </Center>
                    </Box>
                    <Box className={classes.quote}>
                        <Center>
                            <Box>
                                <Flex className={classes.quoteBox2}>
                                    <Box onClick={handleLogout}>
                                        <NavLink >
                                            <Box sx={(theme) => ({
                                                justifyContent: "space-between   ",
                                                // background: "green",
                                            })}>
                                                <MdLogout size={40} />
                                                <Text sx={(theme) => ({ fontSize: "14px", color: "black", fontWeight: "normal" })}>Log Out</Text>
                                            </Box>
                                        </NavLink>
                                    </Box>
                                </Flex>
                            </Box>
                        </Center>
                    </Box>
                </Box >
            </Navbar >
        </>
    );
}

const useStyle = createStyles((theme) => ({
    navbar: {
        background: "#d0f23d",
        color: "#fff",
        height: "10%",
        top: 0,
        position: "sticky",
        zIndex: 3

    },
    menubar: {
        height: "100%", width: "100%",
        '@media (max-width: 768px)': {
            display: "none",

        },
    },
    logoBox: {
        width: "20%",
        // background: "red",
        listStyle: "none",

    }, logoBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",

    },
    logo: {
        cursor: "pointer",
        listStyle: "none",
        textDecoration: "none",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: 700,
        '@media (max-width: 768px)': {
            marginLeft: "50px"
        },
    },

    navitem: {
        cursor: "pointer",
        listStyle: "none",
        textDecoration: "none",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "black",
        fontSize: 20,

        "&:hover": {
            color: "#FF5829"
        },
    },

    drawerItem: {

        listStyle: "none",
        textDecoration: "none",
        padding: `10px`,
        color: "#fff",
        fontSize: "25px"
    },
    navcollection: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        gap: "40px",
        width: "80%",
        margin: 0,
        padding: 0,

    },
    quote: {
        width: "20%",
        background: "#d0f23d",
        "&:hover": {
            cursor: "pointer"
        },
        '@media (max-width: 768px)': {
            display: "none"

        },
    },
    headerBox: {

        background: "#ff5829",
        listStyle: "none",
        display: "none",
        '@media (max-width: 768px)': {
            display: "block"
        },
    },
    headerBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    headerBox3: {
        listStyle: "none",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: 700,
        color: "#fff",

    },
    togalBox: {
        width: "20%",
        display: "none",
        listStyle: "none",
        '@media (max-width: 768px)': {
            display: "block",
        },
    },
    togalBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        position: "absolute",
        // background :"green",

        right: "10px",

    },


    quoteBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        "&:hover": {
            cursor: "pointer",
        }
    },
}))