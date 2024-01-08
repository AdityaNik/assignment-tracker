import { Button, Card, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AppBar() {
    const navigate = useNavigate();

    return <div>
        <div style={{ paddingBottom: "10px" }}>
            <Card style={{ display: 'flex', justifyContent: "center", padding: "10px" }} variant='outlined'>
                <Typography variant='h5'>Assignment Tracker</Typography>
            </Card>
        </div>
        <div>
            <Card style={{ height: "80px", padding: "10px" }} variant='outlined'>
                <div>
                    <div>
                        <Typography variant='h6'>Assignment Tracker</Typography>
                    </div>
                    <div>
                        <Grid container style={{ padding: "3vh" }}>
                            <Grid item lg={4} md={4} sm={4} style={{ display: "flex", justifyContent: "center" }}>
                                <Button variant="text" onClick={() => {
                                    navigate('/ds');
                                }}>DS</Button>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} style={{ display: "flex", justifyContent: "center" }}>
                                <Button variant="text" onClick={() => {
                                    navigate('/ldco');
                                }}>LDCO</Button>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} style={{ display: "flex", justifyContent: "center" }}>
                                <Button variant="text" onClick={() => {
                                    navigate('/bcn');
                                }}>BCN</Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </Card>
        </div>
    </div>
}

export default AppBar;