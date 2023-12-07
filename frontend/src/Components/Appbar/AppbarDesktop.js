import { ListItemButton, ListItemIcon, ListItemText, ListItem } from "@mui/material"
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./Actions"
import "@fontsource/noto-sans"

function AppbarDesktop({ matches }) {

    const listItemTextStyle = {
        fontFamily: '"Noto Sans" "cursive"',
        fontWeight: 600,
    }

    return (
        <AppbarContainer>
            <AppbarHeader>Male Clothings</AppbarHeader>
                <MyList type='row'>
                    <ListItemText disableTypography sx={listItemTextStyle} primary='Home'/>
                    <ListItemText primary='Categories'/>
                    <ListItemText primary='Products'/>
                    <ListItemText primary='Contact Us'/>
                    <ListItemButton>
                        <ListItemIcon><SearchIcon/></ListItemIcon>
                    </ListItemButton>
                </MyList>
                <Actions matches={matches}/>
        </AppbarContainer>
  )
}

export default AppbarDesktop