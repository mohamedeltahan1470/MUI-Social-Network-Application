import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { useTheme } from '@emotion/react'

const NotFound = () => {
    const theme = useTheme();
  return (
    <Box>
        <Typography variant="h5" color={theme.palette.error.main }>
            There is no design yet
            <br />
            <br />
            please try again later..
        </Typography>
    </Box>
  )
}
export default NotFound