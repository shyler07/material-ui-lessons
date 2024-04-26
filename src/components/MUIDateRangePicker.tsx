// import { DateRangePicker } from "@mui/lab"
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Box } from "@mui/material"
import { useState } from "react"

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers';


// date range picker for Pro need license key
const MUIDateRangePicker = () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box width="500px"  m='1rem'>
            <DateRangePicker
                localeText={{ start: 'Check-in', end: 'Check-out' }}
                value={value}
                onChange={(newValue: [Date | null, Date | null]) => {
                    setValue(newValue)
                }}
            />
        </Box>
        </LocalizationProvider>
  )
}

export default MUIDateRangePicker
