import './App.css';
import { Typography, makeStyles, Box, } from '@material-ui/core'
import Balance from "../src/Components/Balance"
import Expense from "../src/Components/Expense"
import Transactions from "../src/Components/Transactions"
import History from "../src/Components/History"

const useStyle = makeStyles({
  header: {
    color: "red",
    fontSize: 36,
    margin: "10px 0px",
    textTransform: "uppercase",
    textDecoration: "underline"
  },

  components: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    width: "900px",
    margin: "25px 0px",
    display: "flex",
    "&>*": {
      width: "50%",
      padding: "12px"
    }

  }
})

function App() {
  const classes = useStyle()
  return (
    <>
      <div className="App">
        <Typography className={classes.header}>Expense Tracker</Typography>
        <Box className={classes.components}>
          <Box>
            <Balance />
            <Expense />
            <Transactions />
          </Box>
          <Box>
            <History />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default App;
