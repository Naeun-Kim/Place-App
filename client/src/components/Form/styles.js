import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiButton-root, & .MuiOutlinedInput-root": {
      borderRadius: "0",
      boxShadow: "none",
    },
    "& .MuiButton-contained": {
      boxShadow: "none",
    },
    "& .MuiButton-containedSizeLarge": {
      height: "48px",
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  inputItem: {
    marginLeft: "0 !important",
    marginRight: "0 !important",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
