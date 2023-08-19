import { Button, Input, Image, Box, Heading, Text } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';




export const HomePage = () => {

    return (
        <>
        <h1>WelCome to our blog App </h1>
            <Box>
            
                <Box>
                    <Image src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.png" alt="img-1" width={"100%"} height={"600px"} />
                </Box>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    >
                       
    
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Box>
        </>
    )
}