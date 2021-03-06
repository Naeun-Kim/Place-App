import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    margin: "30px 0",
    padding: "0 0 0 24px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  heading: {
    color: "#f06292",
    fontWeight: "800",
    fontStyle: "italic",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",

    "& > div": {
      display: "flex",
      alignItems: "center",
      marginRight: "20px",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  button: {
    borderRadius: "0",
    boxShadow: "none",
  },
}));
