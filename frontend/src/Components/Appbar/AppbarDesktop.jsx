import { ListItemButton } from "@mui/material"
import { AppbarContainer, AppbarHeader, ListText, MyList } from "../../styles/appbar"
import Actions from "./Actions"
import "@fontsource/noto-sans"

function AppbarDesktop({ matches }) {


    return (
        <AppbarContainer>
            <AppbarHeader>Male Clothings</AppbarHeader>
                <MyList type='row'>

                    <ListItemButton>
                        <ListText disableTypography primary='Home'/> 
                    </ListItemButton>

                    <ListItemButton>
                        <ListText disableTypography primary='Categories'/>
                    </ListItemButton>
                    
                    <ListItemButton>
                        <ListText disableTypography primary='Products'/>
                    </ListItemButton>
                    
                    <ListItemButton>
                        <ListText disableTypography primary='Contact Us'/>   
                    </ListItemButton>
                       
                    <Actions matches={matches}/>
                </MyList>
               
        </AppbarContainer>
  )
}

export default AppbarDesktop