import { Typography, LinearProgress, Card, ListItemButton, ListItemIcon, ListItemText, Collapse, List } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import axios from "axios";
import { useEffect, useState } from "react";


function DiscreteMath() {
    const [progress, setProgress] = useState(10);
    const [unitsCount, setUnitCount] = useState([]);
    const [open, setOpen] = useState<boolean[]>([]);

    const init = async () => {
        const response = await axios.get(`http://localhost:3000/dm`, {});
        console.log(response.data.data.UnitCount);
        setUnitCount(response.data.data.UnitCount);
        for (let i = 0; i < unitsCount.length; i++) {
            open[i] = false;
        }
    }
    useEffect(() => {
        init();
    }, [])

    // const handleClick = () => {
    //     let
    //     setOpen(!open);
    // }

    return <div>
        <div style={{ padding: "5px" }}>
            <Typography variant={"h3"}>
                DiscreteMath
            </Typography>
        </div>
        <Typography variant={"subtitle1"} style={{ paddingLeft: "10px" }}>
            Discription :
        </Typography>
        <div style={{ padding: "10px" }} >
            <Typography variant={"subtitle2"}>
                Discrete mathematics, often abbreviated as "discrete math," is a branch of mathematics that deals with countable and distinct, separate, or disconnected objects. It provides the mathematical foundations for various areas of computer science, information technology, and other fields where discrete structures and processes are fundamental. Here are some key topics and concepts within discrete mathematics:<br></br>
                1. Set Theory: Set theory is the foundation of discrete mathematics. It deals with sets, which are collections of distinct objects. Concepts like unions, intersections, subsets, and set operations are fundamental in this area.<br></br>
                3. Graph Theory: Graph theory studies relationships between pairs of objects. Graphs consist of vertices (nodes) and edges (connections). Topics include graph types, connectivity, graph algorithms, and applications in networks and optimization.<br></br>
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


export default DiscreteMath;