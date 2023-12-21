import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { AppbarContainer, AppbarHeader } from "../../styles/appbar"
import { useUIContext } from '../../Contexts/ui'
import { useTheme } from '@mui/material/styles'

function AppbarMobile() {

  const { setDrawerOpen } = useUIContext()
  const theme = useTheme()
  
  return (

    <AppbarContainer>
        

        <AppbarHeader marginRight='85px' textAlign='left' variant='h6'>Male Clothings</AppbarHeader>

        <IconButton sx={{
            [theme.breakpoints.up("md")]: {
              marginRight: '-900px',
              alignItems: 'right',
              },
              [theme.breakpoints.between('sm', 'md')]: {
                marginRight: '-700px',
                alignItems: 'right',
              },
              alignItems: 'right',
          }} 
          onClick={() => setDrawerOpen(true)}
        >
            <MenuIcon/>
        </IconButton>
    </AppbarContainer>

  )
}

export default AppbarMobile