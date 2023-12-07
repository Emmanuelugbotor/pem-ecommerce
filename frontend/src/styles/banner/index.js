import { Box, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Colors } from "../theme"
import "@fontsource/noto-sans"

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light_gray,
  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
    alignItems: "center",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}))

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "500px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}))

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontFamily: '"Noto Sans" "cursive"',
  fontWeight: 600,
  maxWidth: 420,
  padding: "30px",
}))

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1.5,
  fontSize: "72px",
  fontFamily: "Noto Sans",
  fontWeight: 400,
  marginBottom: "20px",
  [theme.breakpoints.down('sm')]: {
    fontSize: '42px',    
  }
}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  fontFamily: "Noto Sans",
  fontWeight: 600,
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}))