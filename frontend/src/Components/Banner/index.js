import { Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner'

function Banner() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
      <BannerContainer>

        <BannerImage src='/Images/banner/img.png'/>
        <BannerContent>

          <Typography variant='h6'>Our Collections</Typography>
          <BannerTitle variant='h2'>New Clothes</BannerTitle>
          <BannerDescription variant='subtitle'>
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged.
          </BannerDescription>

        </BannerContent>

      </BannerContainer>
  )
}

export default Banner