import { Typography, Box, makeStyles, TextField, Button,} from '@material-ui/core'
import {HiPlus} from 'react-icons/hi'
import {AiOutlineDollar} from 'react-icons/ai'

const useStyle = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        "&>*": {
            marginTop: '15px',
            padding: "7px"
        }
    },

    button: {
        background: "linear-gradient(to right, #808080, #919191, #808080)",
        color: "white",
        fontSize:"15px",
        borderRadius: "5px"
    }
})
function Transactions() {
    const classes = useStyle()
    return (
        <Box className={classes.container}>
            <Typography variant="h5">
                Your Transactions <AiOutlineDollar/>
            </Typography>
            <TextField id="standard-basic" label="Enter Expense Amount" variant="standard" />
            <TextField id="standard-basic" label="Enter Income Amount" variant="standard" />
            <Button variant="contained" disableElevation className={classes.button}>
            <HiPlus />Add Transactions
    </Button>
        </Box>
    )
}

export default Transactions;