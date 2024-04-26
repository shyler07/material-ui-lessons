import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"


const MUITimeline = () => {
  return (
    <>  
    <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent color='text.primary'>9:30AM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined"/>
                <TimelineConnector/>
            </TimelineSeparator>

            <TimelineContent>
                    City A
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent color='text.primary'>12:30AM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>

            <TimelineContent>
                    City B
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent color='text.primary'>10:30AM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                {/* <TimelineConnector/> */}
            </TimelineSeparator>

            <TimelineContent>
                    City C
            </TimelineContent>
        </TimelineItem>
    </Timeline>
    
    
    </>

  )
}

export default MUITimeline
