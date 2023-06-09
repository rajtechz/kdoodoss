import { Box, Tabs } from '@mantine/core';
import AttendeeList from './AttendeeList';
import Awardees from './Awardees';
import Guest from './Guest';
import CheckedIn from './CheckedIn';
import NotArrived from './NotArrived';

export default function AllDetails() {
    return (
        <Tabs defaultValue="attendeelist" variant="pills" >
            <Box sx={() => ({ background: "#e64980", position: "fixed", width: "100vw", zIndex: 2 })} py={15}>
                <Tabs.List position="center">
                    <Tabs.Tab value="attendeelist" sx={() => ({ cursor: "pointer", justifyContent: "center", alignItems: "center", textAlign: "center", color: "black", textDecorationLine: "none", fontSize: 20, "&:hover": { color: "#FF5829" }, })}>Total</Tabs.Tab>
                    <Tabs.Tab value="awardee" sx={{ cursor: "pointer", justifyContent: "center", alignItems: "center", textAlign: "center", color: "black", fontSize: 20, textDecorationLine: "none", "&:hover": { color: "#FF5829", }, }}>Awardee</Tabs.Tab>
                    <Tabs.Tab value="guest" sx={() => ({ cursor: "pointer", justifyContent: "center", alignItems: "center", textAlign: "center", color: "black", fontSize: 20, textDecorationLine: "none", "&:hover": { color: "#FF5829" }, })}>Gurst</Tabs.Tab>
                    <Tabs.Tab value="checkedin" sx={() => ({ cursor: "pointer", justifyContent: "center", alignItems: "center", textAlign: "center", color: "black", fontSize: 20, textDecorationLine: "none", "&:hover": { color: "#FF5829" }, })} >CheckedIn</Tabs.Tab>
                    <Tabs.Tab value="notarrivd" sx={() => ({ cursor: "pointer", justifyContent: "center", alignItems: "center", textAlign: "center", color: "black", fontSize: 20, textDecorationLine: "none", "&:hover": { color: "#FF5829" }, })}>NotArrivd</Tabs.Tab>
                </Tabs.List>
            </Box>
            <Tabs.Panel value="attendeelist"  >
                <AttendeeList />
            </Tabs.Panel>
            <Tabs.Panel value="awardee" >
                <Awardees />
            </Tabs.Panel>
            <Tabs.Panel value="guest" >
                <Guest />
            </Tabs.Panel>
            <Tabs.Panel value="checkedin" >
                <CheckedIn />
            </Tabs.Panel>
            <Tabs.Panel value="notarrivd" >
                <NotArrived />
            </Tabs.Panel>
        </Tabs>
    );
}