import { Typography, Box, makeStyles, Divider, TextField, Button } from '@material-ui/core'

const useStyle= makeStyles({
heading:{
    fontSize:"26px",
}
})
function History(){
    const classes= useStyle()
    return(
    <Box>
        <Typography className={classes.heading}>Transaction History</Typography>
        <Divider/>
    </Box>
    )
}

export default History;