import { Box, Slide } from "@mui/material"
import { PromotionsContainer, MessageText } from "../../styles/promotions"
import { useEffect, useState, useRef } from "react"

const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "Please like and subscribe :)",
  ]

function Promotions() {
    const containerRef = useRef()
    const [messageIndex, setMessageIndex] = useState(0)
    const [showSlideText, setShowSlideText] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setShowSlideText(false)
        }, 3000)

        const intervalId = setInterval(() => {
            setMessageIndex( i => (i + 1) % messages.length)

            setShowSlideText(true)

            setTimeout(() => {
                setShowSlideText(false)
            }, 3000)

        }, 4000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])
    
    return (
        <PromotionsContainer>
            <Slide 
                container={containerRef.current}
                direction={showSlideText ? 'left' : 'right'} 
                in={showSlideText}
                timeout={{
                    enter: 500,
                    exit: 100
                }}>
                <Box display= 'flex' justifyContent='center' alignItems= 'center'>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
  )
}

export default Promotions