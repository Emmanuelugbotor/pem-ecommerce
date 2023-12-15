import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./Actions"
import "@fontsource/noto-sans"
import { useUIContext } from "../../Contexts/ui"

function AppbarDesktop({ matches }) {

    const listItemTextStyle = {
        fontFamily: '"Noto Sans" "cursive"',
        fontWeight: 600,
        '&:hover': {
            cursor: 'pointer',
        }
    }

    const { setShowSearchBox } = useUIContext()

    return (
        <AppbarContainer>
            <AppbarHeader>Male Clothings</AppbarHeader>
                <MyList type='row'>
                    <ListItemText disableTypography sx={listItemTextStyle} primary='Home'/>
                    <ListItemText disableTypography sx={listItemTextStyle} primary='Categories'/>
                    <ListItemText disableTypography sx={listItemTextStyle} primary='Products'/>
                    <ListItemText disableTypography sx={listItemTextStyle} primary='Contact Us'/>
                    <ListItemButton>
                        <ListItemIcon><SearchIcon onClick={() => setShowSearchBox(true) }/></ListItemIcon>
                    </ListItemButton>
                </MyList>
                <Actions matches={matches}/>
        </AppbarContainer>
  )
}

export default AppbarDesktop