import MUIAccordion from "./components/MUIAccordion"
import MUIAutocomplete from "./components/MUIAutocomplete"
import MUIAvatar from "./components/MUIAvatar"
import MUIBadge from "./components/MUIBadge"
import MUIBottomNavigation from "./components/MUIBottomNavigation"
import MUIBreadcrumbs from "./components/MUIBreadcrumbs"
import { MUIButton } from "./components/MUIButton"
import MUICard from "./components/MUICard"
import MUICheckbox from "./components/MUICheckbox"
import MUIChip from "./components/MUIChip"
import MUIDateRangePicker from "./components/MUIDateRangePicker"
import MUIDateTimePicker from "./components/MUIDateTimePicker"
import MUIDialog from "./components/MUIDialog"
import MUIDrawer from "./components/MUIDrawer"
import MUIFeedback from "./components/MUIFeedback"
import MUIImagelist from "./components/MUIImagelist"
import MUILayout from "./components/MUILayout"
import MUILinks from "./components/MUILinks"
import MUIList from "./components/MUIList"
import MUILoadingButton from "./components/MUILoadingButton"
import MUIMasonry from "./components/MUIMasonry"
import MUINavbar from "./components/MUINavbar"
import MUIProgress from "./components/MUIProgress"
import MUIRadioButton from "./components/MUIRadioButton"
import MUIRating from "./components/MUIRating"
import MUIResponsive from "./components/MUIResponsive"
import MUISelect from "./components/MUISelect"
import MUISkeleton from "./components/MUISkeleton"
import MUISnackbar from "./components/MUISnackbar"
import MUISpeedDial from "./components/MUISpeedDial"
import MUISwitch from "./components/MUISwitch"
import MUITable from "./components/MUITable"
import MUITabs from "./components/MUITabs"
import MUITextField from "./components/MUITextField"
import MUITimeline from "./components/MUITimeline"
import MUIToolTip from "./components/MUIToolTip"
import { MUITypography } from "./components/MUITypography"

// custom theme
import { createTheme, colors, ThemeProvider } from "@mui/material"

const theme = createTheme({
  status: {
    danger: "#e53e3e"
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },

    neutral: {  // Corrected the spelling to 'palette'
      main: colors.grey[500],
      dark: colors.grey[700]
    }
  }
});

function App() {
 
  return (
  
    <>
  <ThemeProvider theme={theme}>
          <div className="App">

        {/* <MUITypography/>
        <MUIButton/>
        <MUITextField/>
        <MUISelect />
        <MUIRadioButton/>
          <MUICheckbox/>
          <MUISwitch/>
          <MUIRating/>
          <MUIAutocomplete/>
         <MUILayout/> 
          <MUICard/>
          <MUIImagelist/>

       

          <MUIAccordion/> 
          <MUILinks></MUILinks>
          <MUIBreadcrumbs/>
          <MUIDrawer/>
          <MUISpeedDial/>
          <MUIBottomNavigation/>

          <div className="avatar-container">     
            <MUIAvatar/> 
          
          </div>

            <MUIBadge/>
            <MUIList/>
            <MUIChip/>
            <MUIToolTip/>
            <MUIFeedback/> 
            <MUITable/>
              
          
          <MUISnackbar/>
          <MUIDialog/>
          <MUIProgress/>
          <MUISkeleton/>
          <MUILoadingButton/>
          <MUIDateTimePicker/>
          <MUIDateRangePicker/>
          <MUITabs/>
          <MUITimeline/>
          <MUIMasonry/>
          */}

{/* 
      <MUIResponsive/> */}
         <MUINavbar/>
        </div>
        </ThemeProvider>
     </>

  )
}

export default App
