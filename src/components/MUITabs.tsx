
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react"
import { Favorite } from "@mui/icons-material"

//  variant="fullWidth => tablist
//centered => tablist

const MUITabs = () => {

    const [value, setValue] = useState <string>("1")
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }
  return (
<Box>
    <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider', width: '400px'}}>
        
                <TabList aria-label="Tabs example" 
                onChange={handleChange} 
                textColor="secondary" 
                indicatorColor="secondary"
                variant="scrollable"
                scrollButtons='auto'
                
                
                >
                    
                <Tab iconPosition='start' icon={<Favorite/>} label='Tab One' value={'1'}></Tab>
                <Tab label='Tab Two' value='2' disableRipple></Tab>
                <Tab label='Tab Three' value='3' disabled></Tab>
                <Tab label='Tab four' value='4' disableTouchRipple></Tab>
            </TabList>
        </Box>

            <TabPanel value='1'>Panel one</TabPanel>
            <TabPanel value='2'>Panel two</TabPanel>
            <TabPanel value='3'>Panel three</TabPanel>
            <TabPanel value='4'>Panel four</TabPanel>
        </TabContext>
    </Box>
  )
}

export default MUITabs
