import { IconButton, List, ListItemText, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Box } from "@mui/system"
import { Colors } from "../theme"
import '@fontsource/montez'


export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 0,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '2px 8px',
    
})) 


export const AppbarHeader = styled(Typography)(() => ({
    padding: "0 20px",
    flexGrow: 1,
    fontSize: "2.7rem",
    fontFamily: "'Montez', 'cursive'",
    color: Colors.secondary
}))


export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    marginLeft: 'auto',
    justifyContent: "center",
    alignItems: "center",
    color: Colors.dark
}))


export const ListText = styled(ListItemText)(() => ({
    fontFamily: '"Poppins" "sans-serif"!important',
    fontWeight: 600,
    '&:hover': {
        cursor: 'pointer',
    }
}))


export const ActionsIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,  
    borderTop: `1px solid ${Colors.border}`
  }))

  
export const ActionsIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
    paddingLeft: '200px'
}))


export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: '250px',
    zIndex: 1999
}))