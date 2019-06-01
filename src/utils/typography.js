import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'
import lincolnTheme from 'typography-theme-lincoln'
funstonTheme.baseFontSize = '10px' // was 20px.
 
const typography = new Typography(lincolnTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

