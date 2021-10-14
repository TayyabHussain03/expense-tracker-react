import { Typography, Box, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    balance: {
        fontSize: 26,
        marginBottom: "10px",
    },
})

function Balance() {
    const classes = useStyle()
    return (
        <>
        <Box>
            <Typography className={classes.balance}>Balance Rs: 1000 </Typography>
        </Box>
        </>
    )
}

export default Balance