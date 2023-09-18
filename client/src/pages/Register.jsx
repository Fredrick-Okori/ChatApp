import {
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
    Grid,
    Container,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Paper,
    Typography,
    ButtonBase,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    //align center
    container: {
        marginTop: "20vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        border: '1px solid #ffff',
        caretColor: '#25d366',
        borderRadius: '7px',

    },
    accountLink: {
        fontSize: '0.5rem'
    },
    loginTitle:{
    textAlign: 'center',
      
    }


})

const Register = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth='xs'>
                <Paper elevation={6} style={{borderRadius: '20px'}}>
                    <form>
                        <Grid style={{ marginTop: '20vh', placeContent: 'center', alignItems: 'center', padding: '30px', borderRadius: '20px' }}>
                            <Grid container spacing={3}>
                                <Typography className={classes.loginTitle} >Login into your account</Typography>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>

                                        <OutlinedInput
                                            className={classes.input}
                                            id="name"
                                            type="text"
                                            size="large"
                                            name="name"
                                            placeholder='Username'
                                            fullWidth
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>

                                        <OutlinedInput
                                            className={classes.input}
                                            id="eamil"
                                            type="email"
                                            size="large"
                                            name="email"
                                            placeholder="Email Address"
                                            fullWidth
                                        />

                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>

                                        <OutlinedInput
                                            className={classes.input}
                                            id="password"
                                            type="password"
                                            size="large"
                                            name="password"
                                            placeholder="Password"
                                            fullWidth
                                        />

                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>

                                        <Button
                                            style={{
                                                padding: '10px',
                                                backgroundColor: '#25d366',
                                                textTransform: 'none',
                                                color: '#ffff',
                                                borderRadius: '5px',
                                                padding: '15px',
                                            }}
                                            size="large"
                                        >
                                            Submit
                                        </Button>

                                    </Stack>
                                </Grid>

                                <Grid item xs={12}>
                                    <Stack spacing={1}>

                                        <Typography className={classes.accountLink} > I already have an account,
                                            <Link
                                                style={{ textTransform: 'capitalize', backgroundColor: '#ffff' }}
                                                to='/login'> Login</Link>
                                        </Typography>

                                    </Stack>
                                </Grid>
                            </Grid>


                        </Grid>

                    </form>
                </Paper>
            </Container>




        </>
    );
}

export default Register;