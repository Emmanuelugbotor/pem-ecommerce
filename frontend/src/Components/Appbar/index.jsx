import React from 'react'
import { AppBar, Toolbar, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import AppbarDesktop from './AppbarDesktop'
import AppbarMobile from './AppbarMobile'


const Appbar = ({ matches }) => {

    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    const isDesktopMatch = useMediaQuery(theme.breakpoints.up('lg'))

    

    return (
        <>
            <AppBar position='sticky' sx={{ background: '#fff', marginRight: '50px', marginLeft: '0px -30px', }}>
                <Toolbar>
                    {isMatch ? (
                    
                    <AppbarMobile matches={matches}/>
                    ) : isDesktopMatch ? (
                    
                        <AppbarDesktop matches={matches}/>
                        ):  (
                       
                    <AppbarMobile matches={matches}/>
                      
                    )
                }
                   
                </Toolbar>

                
            </AppBar>
        </>
    )
}

export default Appbar