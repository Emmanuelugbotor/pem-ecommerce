import React from 'react'
import { useUIContext } from '../../Contexts/ui'
import { IconButton, Slide } from '@mui/material'
import { SearchBoxContainer, SearchField } from '../../styles/search'
import CloseIcon from "@mui/icons-material/Close"
import SearchIcon from "@mui/icons-material/Search"

function SearchBox() {

    const { showSearchBox, setShowSearchBox } = useUIContext()
    
    return (
        <Slide direction='down' in={showSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                    color='secondary'
                    variant='standard'
                    fullWidth
                    placeholder='Search...'
                />

                <IconButton>
                    <SearchIcon
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem'}
                        }}
                        color='secondary'
                    />
                </IconButton>
                
                <IconButton
                    onClick={() => setShowSearchBox(false)}
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10
                    }}
                >
                    <CloseIcon sx={{ fontSize: '4rem' }} color='secondary'/>
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}

export default SearchBox