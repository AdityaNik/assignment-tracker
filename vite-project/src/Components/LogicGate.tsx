import { Typography, LinearProgress, Card, ListItemButton, ListItemIcon, ListItemText, Collapse, List } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import axios from "axios";
import { useEffect, useState } from "react";

function LogicGate() {
    const [progress, setProgress] = useState(10);
    const [unitsCount, setUnitCount] = useState([]);
    const [open, setOpen] = useState<boolean[]>([]);

    const init = async () => {
        const response = await axios.get(`http://localhost:3000/ldco`, {});
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
                Login Design
            </Typography>
        </div>
        <Typography variant={"subtitle1"} style={{ paddingLeft: "10px" }}>
            Discription :
        </Typography>
        <div style={{ padding: "10px" }} >
            <Typography variant={"subtitle2"}>
                Logic design, also known as digital logic design or digital circuit design, is the process of designing electronic circuits that perform specific digital functions. Digital circuits are used in a wide range of applications, including computers, smartphones, appliances, and more. Logic design involves creating circuits that manipulate binary information (0s and 1s) to perform tasks, such as arithmetic, data storage, and control.<br></br>
                1. Binary Logic: Binary logic forms the foundation of digital logic design. It deals with the representation of information using only two states: 0 and 1. These states correspond to "false" and "true," respectively, in a logical context.<br></br>
                2. Digital Components: Logic design involves creating digital components, such as logic gates, flip-flops, multiplexers, and decoders. These components are used to build more complex digital systems.<br></br>
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

export default LogicGate;