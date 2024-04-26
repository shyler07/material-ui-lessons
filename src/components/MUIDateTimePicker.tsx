// install => npm add date-fns @date-io/date-fns
// install => npm add @mui/x-date-pickers

import { Stack, TextField } from "@mui/material"
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers'
import { useState } from "react"

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers';

const MUIDateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<Date| null>(null)
    const [selectedDateTime, setSelectedDateTime] = useState<Date| null>(null)

    console.log({selectedDate: selectedDate && selectedDate.toLocaleDateString()})
    console.log({selectedTime: selectedTime && selectedTime.toLocaleTimeString()})
    console.log({selectedDateTime: selectedDateTime && selectedDateTime})


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

        <Stack spacing={2} sx={{ width: '250px', m:'1rem'}}>
          {/* old way */}
                {/* <DatePicker label='Date Picker' 
                    renderInput= {(params) => <TextField {...params}/>}
                    value={selectedDate}
                    onChange={(newValue)=>{
                        setSelectedDate(newValue)
                    }}
                />  */}
          {/* new way */}
        <DatePicker  label="Date Picker" value={selectedDate} 
                    onChange={(newValue) => setSelectedDate(newValue)}
                    >

          </DatePicker>

              <TimePicker  label="Time Picker" value={selectedTime} 
                    onChange={(newTime) => setSelectedTime(newTime)}>

            </TimePicker>

            <DateTimePicker  label="Date & Time Picker" value={selectedDateTime} 
                    onChange={(newDateTime) => setSelectedDateTime(newDateTime)}>

            </DateTimePicker>
        </Stack>
          
         
        
   
   </LocalizationProvider>
  )
}

export default MUIDateTimePicker
