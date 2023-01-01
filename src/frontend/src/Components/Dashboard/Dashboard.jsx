import React from 'react';
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
import FormControlLabel from '@mui/material/FormControlLabel';

import DashLogo from '../../Assets/logo_light.png';
import ComponentSwitcher from '../Utility/ComponentSwitcher'

import SummarizeIcon from '@mui/icons-material/Summarize';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize:'15px'
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
    },

    content: {
        display: 'flex',
        textAlign: 'center',
        position: 'relative',
        top: '100px',
    },

    dashboardWindow: {
        padding: '1%'
    }
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

let flag = true

export default function Dashboard() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [currentComponent, setCurrentComponent] = React.useState();
    const [buttonColour, setButtonColour] = React.useState([false,false,false,false,false,false]);
    
    const handleDrawer = () => {
        setOpen(!open)
        flag = !flag
    };

    const hoverHandle = () => {
        if ( !flag )
            setOpen(!open)

    }

    const renderWebComponent = (number) => {
        var componentNames = ["Summary","SkillProject","WorkExperience","Academics","Casual","About"]
        buttonColour.fill(false)
        buttonColour[number] = true
        setButtonColour(buttonColour);
        setCurrentComponent(componentNames[number]);
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
                        <FormControlLabel
                            control={<MaterialUISwitch sx={{ m: 1 }} />}
                            label="Change the theme?"
                        />
                        </div>


                    </Toolbar>
            </AppBar>
            
            <main className={classes.content}>
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
                        <ListItem button style={{backgroundColor:buttonColour[0]?'#feefc3':''}} key='Summary' onClick={() => renderWebComponent(0)} className={classes.buttonCustomization}>
                            <ListItemIcon><SummarizeIcon /></ListItemIcon>
                            <ListItemText primary='Summary' />
                        </ListItem>
                        <ListItem button style={{backgroundColor:buttonColour[1]?'#feefc3':''}} key='Skills and Projects' className={classes.buttonCustomization}>
                            <ListItemIcon><AccountTreeIcon /></ListItemIcon>
                            <ListItemText primary='Skills and Projects' />
                        </ListItem>
                        <ListItem button style={{backgroundColor:buttonColour[2]?'#feefc3':''}} key='Work Experience' className={classes.buttonCustomization}>
                            <ListItemIcon><HomeRepairServiceIcon /></ListItemIcon>
                            <ListItemText primary='Work Experience' />
                        </ListItem>
                        <ListItem button style={{backgroundColor:buttonColour[3]?'#feefc3':''}} key='Academics' className={classes.buttonCustomization}>
                            <ListItemIcon><LocalLibraryIcon /></ListItemIcon>
                            <ListItemText primary='Academics' />
                        </ListItem>
                        <ListItem button style={{backgroundColor:buttonColour[4]?'#feefc3':''}} key='Lets get casual?' onClick={() => renderWebComponent(4)} className={classes.buttonCustomization}>
                            <ListItemIcon><SportsEsportsIcon /></ListItemIcon>
                            <ListItemText primary='Lets get casual?' />
                        </ListItem>
                        <ListItem button style={{backgroundColor:buttonColour[5]?'#feefc3':''}} key='About the page' className={classes.buttonCustomization}>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText primary='About the page' />
                        </ListItem>
                    </List>
                </Drawer>
                <div className={classes.dashboardWindow}>
                    <ComponentSwitcher renderedComponent={currentComponent} />
                </div>
            </main>
        </div>
    );
}