import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material/'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'


const PAGES = ['Products', 'Services', 'About Us', 'Contact Us', 'Login', 'Logout']
const AppDrawer = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <Drawer 
                sx={{color: ""}}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}>

                <List>
                    {PAGES.map((page, index) => (
                        <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                            <ListItemIcon>
                                <ListItemText>
                                    {page}
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}
                    
                </List>
            </Drawer>
            <IconButton sx={{ color: '#0e1b20', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuOpenIcon/>
            </IconButton>
        </>
    )
}

export default AppDrawer