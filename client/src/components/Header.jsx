import { AppBar, Typography, Grid, Container, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    container: {

        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        placeContent: 'space-between',

    },
    logo: {
        color: '#fff',
        textDecoration: 'none',

    },
    linkContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        alignItems: 'center',
    },
    linkLogin: {
        color: '#25d366'

    }

})

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar bg="light" position="fixed" className='mb-4' style={{ height: '3.75rem', backgroundColor: '#25d366' }}>
                <Container maxWidth='lg'>
                    <Grid className={classes.container}>
                        <Grid>
                            <Link to='/' className={classes.logo}>
                                <Typography variant="h5">ChatApp</Typography>
                            </Link>
                        </Grid>

                        <Grid className={classes.linkContainer}>
                            <Grid>
                                <Typography>Logged in as Fredrick</Typography>
                            </Grid>
                            <Button
                                component={Link}
                                variant="outlined" to='/login'
                                style={{ textTransform: 'capitalize', backgroundColor: '#ffff' }}
                                className={classes.linkLogin}>

                                Login
                            </Button>
                            <Button
                                component={Link}
                                variant="contained"
                                to='/register'
                                className={classes.link}
                                style={{ textTransform: 'capitalize', backgroundColor: '#075e54' }}
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>

        </>
    );
}

export default Header;