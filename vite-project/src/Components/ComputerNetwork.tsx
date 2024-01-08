import { Typography, LinearProgress, Card, ListItemButton, ListItemIcon, ListItemText, Collapse, List } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import axios from "axios";
import { useEffect, useState } from "react";

function ComputerNetwork() {
    const [progress, setProgress] = useState(10);
    const [unitsCount, setUnitCount] = useState([]);
    const [open, setOpen] = useState<boolean[]>([]);

    const init = async () => {
        const response = await axios.get(`http://localhost:3000/bcn`, {});
        console.log(response.data.data.UnitCount);
        setUnitCount(response.data.data.UnitCount);
        for (let i = 0; i < unitsCount.length; i++) {
            open[i] = false;
        }
    }
    useEffect(() => {
        init();
    }, [])

    return <div>
        <div style={{ padding: "5px" }}>
            <Typography variant={"h3"}>
                Basics of Computer Network
            </Typography>
        </div>
        <Typography variant={"subtitle1"} style={{ paddingLeft: "10px" }}>
            Discription :
        </Typography>
        <div style={{ padding: "10px" }} >
            <Typography variant={"subtitle2"}>
                Computer networks are a fundamental part of modern computing and communication. They enable devices to connect and share resources, such as data, applications, and hardware, over a network. Here are some of the basics of computer networks:<br></br>
                1. Definition of a Network: A computer network is a collection of interconnected devices (computers, servers, routers, switches, etc.) that can communicate with each other and share resources.<br></br>
                2. Sharing Resources: Networks allow devices to share resources like files, printers, and internet connections.<br></br>
                3. Communication: Networks enable communication between devices, including email, chat, video conferencing, and more.<br></br>
                4. Centralized Data Storage: Data can be stored on centralized servers, making it accessible to authorized users from different locations.<br></br>
                5. Scalability: Networks can scale to accommodate more devices and users as needed.
            </Typography>
            <div>
                <Card variant={"outlined"} style={{ height: "30px", marginTop: "40px" }}>
                    <LinearProgress variant="determinate" value={progress} style={{ marginTop: "15px" }} />
                </Card>
                <div style={{ marginTop: "20px" }}>
                    <Card variant={"outlined"} style={{ padding: "20px" }}>
                        {unitsCount.map((num, index) =>
                            <div>
                                <ListItemButton key={index} onClick={(e) => {
                                    // console.log(index);
                                    const updatedOpen = [...open];
                                    updatedOpen[index] = !updatedOpen[index];
                                    // console.log(updatedOpen);
                                    setOpen(updatedOpen);
                                }}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Unit " + (index + 1)} />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open[index]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {Array(num).fill(null).map((_, itemIndex) =>
                                            <ListItemButton key={itemIndex} sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                    <StarBorder />
                                                </ListItemIcon>
                                                <ListItemText primary={"Assignment " + (itemIndex + 1)} />
                                            </ListItemButton>
                                        )}
                                    </List>
                                </Collapse>
                            </div>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    </div >
}

export default ComputerNetwork;