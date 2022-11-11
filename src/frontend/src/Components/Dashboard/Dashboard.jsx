import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import HighlightIcon from '@material-ui/icons/Highlight';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';
import DashLogo from '../../Assets/LogoDashboard.png';

import ReplayIcon from '@material-ui/icons/Replay'
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import DialpadIcon from '@material-ui/icons/Dialpad';

import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';

const drawerWidth = 250;

const userId = localStorage.getItem('userId')

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

    const handleCallback = (inputform) => {
        // noteservices.createNote(inputform, userId).then((response) => {
        //     console.log(response)
        //     getNotes()
        // }).catch((error) => {
        //     console.log(error)
        // })
    }

    const getNotes = () => {
        console.log(userId)
        // noteservices.getNotes(userId).then((response) => {
        //     console.log(response)
        //     let serverData = response.data.data.data
        //     setState({info:serverData})
        // }).catch((error) => {
        //     console.log(error)
        // })
    }

   useEffect(()=>{
       if(state.info !== infoCollected)
        getNotes()
    })

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
                    <img src={DashLogo} alt="Fundoo notes" />
                    <Typography variant="h6" noWrap className={classes.heading}>
                        Fundoo Notes
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase className={classes.input}
                            placeholder="Search"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }} />
                    </div>

                    <div className={classes.sectionDesktop}>
                        <IconButton>
                            <Badge >
                                <ReplayIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge >
                                <ViewStreamOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge >
                                <SettingsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge >
                                <DialpadIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
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
                    style={{ marginTop: '70px' }}
                    onMouseEnter={hoverHandle}
                    onMouseLeave={hoverHandle}
                >
                    <ListItem button key='Notes' className={classes.buttonCustomization}>
                        <ListItemIcon><HighlightIcon /></ListItemIcon>
                        <ListItemText primary='Notes' />
                    </ListItem>
                    <ListItem button key='Reminders' className={classes.buttonCustomization}>
                        <ListItemIcon><NotificationsIcon /></ListItemIcon>
                        <ListItemText primary='Reminders' />
                    </ListItem>
                    <ListItem button key='Edit Labels' className={classes.buttonCustomization}>
                        <ListItemIcon><CreateIcon /></ListItemIcon>
                        <ListItemText primary='Edit Labels' />
                    </ListItem>
                    <ListItem button key='Archive' className={classes.buttonCustomization}>
                        <ListItemIcon><ArchiveIcon /></ListItemIcon>
                        <ListItemText primary='Archive' />
                    </ListItem>
                    <ListItem button key='Bin' className={classes.buttonCustomization}>
                        <ListItemIcon><DeleteIcon /></ListItemIcon>
                        <ListItemText primary='Bin' />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                
                
            </main>
        </div>
    );
}