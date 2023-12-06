import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import AppbarMobile from './AppbarMobile'
import AppbarDesktop from './AppbarDesktop'

function Appbar() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
    <>
        {matches ? (
          <AppbarMobile matches={matches}/>
          ) : (
          <AppbarDesktop matches={matches}/>
          )
        }
    </>
  )
}

export default Appbar