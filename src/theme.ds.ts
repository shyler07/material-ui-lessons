import { ThemeOptions, PaletteColorOptions, PaletteColor} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme{
        status: {
            danger: string
        }
       palette: {
            neutral?: PaletteColor
           
         }
    
    }

    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color']
        }
    }

    interface Pallete{
        neutral?: PaletteColor
        dark?: PaletteColor
     }


    interface PaletteOptions{
       neutral?: PaletteColorOptions
    }

    interface SimplePaletteColorOptions{
        dark?: string
    }
}