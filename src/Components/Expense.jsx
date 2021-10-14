import { Typography, makeStyles, Card, CardContent } from '@material-ui/core'

const useStyle = makeStyles({
    container: {
        display: "flex",
        textAlign:"center",
        "&>*": {
            padding: 10,
            flex: 2,
            marginTop: 12
        }
    },

    heading: {
        color: "blue"
    },

    income: {
        color: "green"
    },
    expense: {
        color: "red"
    }
})

function Expense() {
    const classes = useStyle()
    return (
        <div className={classes.container}>
            <Card>
                <CardContent>
                    <Typography className={classes.heading}>
                        Income Statement
                </Typography>
                    <Typography className={classes.income}>
                        Rs: 500
                </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography className={classes.heading}>
                        Expense Statement
                </Typography>
                    <Typography className={classes.expense}>
                        Rs: 300
                </Typography>
                </CardContent>
            </Card>
        </div>

    )
}

export default Expense;