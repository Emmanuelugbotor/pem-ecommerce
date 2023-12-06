import { IconButton, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./Actions"

function AppbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <IconButton>
          <MenuIcon/>
      </IconButton>

      <AppbarHeader textAlign={'center'} variant='h4'>Male Clothings</AppbarHeader>

      <IconButton>
          <SearchIcon/>
      </IconButton>
          {/* <MyList type='row'>
              <ListItemText primary='Home'/>
              <ListItemText primary='Categories'/>
              <ListItemText primary='Products'/>
              <ListItemText primary='Contact Us'/>
              <ListItemButton>
                  <ListItemIcon><SearchIcon/></ListItemIcon>
              </ListItemButton>
          </MyList>
          <Actions/> */}
          <Actions matches={matches}/>
        </AppbarContainer>
  )
}

export default AppbarMobile