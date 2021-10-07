import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import useMediaQuery from '@material-ui/core/useMediaQuery'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import { Dashboard } from '@material-ui/icons'

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    // background:"red",
    width: drawerWidth,
  },
  menuButton: {
    color: '#ff4417',
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
    backgroundColor: '#f3f3f4',
    // borderRadius: 0,
    marginLeft: '.1rem',
  },
  MenuIcon: {
    // marginLeft: '.5rem',
    fontSize: '2.5rem',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

export default function SideBar() {
  const classes = useStyles()
  // const theme = useTheme()
  // const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        // variant={isMdUp ? 'permanent' : 'temporary'}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
        open={open}
        onClose={toggleDrawer}
      >
        {/* <div className={classes.toolbar} /> */}
        <Divider />
        <h1 onClick={toggleDrawer}>Myth</h1>
        <Divider />
      </Drawer>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={toggleDrawer}
        className={classes.menuButton}
      >
        <Dashboard className={classes.MenuIcon} />
      </IconButton>
    </div>
  )
}
