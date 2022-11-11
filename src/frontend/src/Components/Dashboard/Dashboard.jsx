import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashLogo from '../../Assets/logo_light.png';

import Badge from '@material-ui/core/Badge';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InfoIcon from '@mui/icons-material/Info';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'white'
    },

    // for toolbar

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '20px',
        paddingLeft: '10px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '10px',
        backgroundColor: '#f1f3f4',
        marginRight: theme.spacing(2),
        width: '50%',
        "&:click": {
            backgroundColor: 'white',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    searchIcon: {
        padding: '5px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'flex',
        position: 'absolute',
        right: '20px',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    barIcons: {
        marginLeft: '10px',
        marginRight: '10px'
    },

    heading: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },

    },

    // for drawer

    menuButton: {
        marginRight: 0,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            zIndex: 1,
        },
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        borderRight: 0
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: '50px',
        borderRight: 0
    },

    buttonCustomization: {
        borderRadius: '50px',
        // borderBottomRightRadius: '50px',
        '&:focus': {
            backgroundColor: '#feefc3'
        }
    },


    // main body

    content: {
        flexGrow: 1,
        backgroundColor: 'white',
        // padding: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            marginLeft: '60px',
        },
    },

}));

let flag = true
let infoCollected

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [state] = React.useState({
        info : []
    });
    
    const handleDrawer = () => {
        setOpen(!open)
        flag = !flag
    };

    const hoverHandle = () => {
        if (flag === false)
            setOpen(!open)

    }
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={DashLogo} alt="Soham's Web Portal" />
                    <div className={classes.sectionDesktop}>
                        <IconButton>
                            <Badge >
                                <SummarizeIcon />
                            </Badge>
                        </IconButton>
                    </div>


                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <List
                    style={{ marginTop: '90px' }}
                    onMouseEnter={hoverHandle}
                    onMouseLeave={hoverHandle}
                >
                    <ListItem button key='Summary' className={classes.buttonCustomization}>
                        <ListItemIcon><SummarizeIcon /></ListItemIcon>
                        <ListItemText primary='Summary' />
                    </ListItem>
                    <ListItem button key='Skills and Projects' className={classes.buttonCustomization}>
                        <ListItemIcon><AccountTreeIcon /></ListItemIcon>
                        <ListItemText primary='Skills and Projects' />
                    </ListItem>
                    <ListItem button key='Work Experience' className={classes.buttonCustomization}>
                        <ListItemIcon><HomeRepairServiceIcon /></ListItemIcon>
                        <ListItemText primary='Work Experience' />
                    </ListItem>
                    <ListItem button key='Academics' className={classes.buttonCustomization}>
                        <ListItemIcon><LocalLibraryIcon /></ListItemIcon>
                        <ListItemText primary='Academics' />
                    </ListItem>
                    <ListItem button key='Lets get casual?' className={classes.buttonCustomization}>
                        <ListItemIcon><SportsEsportsIcon /></ListItemIcon>
                        <ListItemText primary='Lets get casual?' />
                    </ListItem>
                    <ListItem button key='About the page' className={classes.buttonCustomization}>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary='About the page' />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                
                
            </main>
        </div>
    );
}