import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { AppbarContainer, AppbarHeader } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./Actions"
import { useUIContext } from '../../Context/ui'

function AppbarMobile({ matches }) {

  const { setDrawerOpen, setShowSearchBox } = useUIContext()
  
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon/>
      </IconButton>

      <AppbarHeader textAlign={'center'} variant='h4'>Male Clothings</AppbarHeader>

      <IconButton>
          <SearchIcon onClick={() => setShowSearchBox(true) }/>
      </IconButton>
          
      <Actions matches={matches}/>
    </AppbarContainer>
  )
}

export default AppbarMobile