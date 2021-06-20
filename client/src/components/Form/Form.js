import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { StyledButton, CustomButton } from '../UI/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff94c2',
      main: '#f06292',
      dark: '#ba2d65',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c1d5e0',
      main: '#90a4ae',
      dark: '#62757f',
      contrastText: '#fff',
    },
  },
});

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autocomplete="off"
                noValidate className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}>
                {/* <Typography variant="h6">Creating a place</Typography> */}
                <TextField className={classes.inputItem} name="creator" variant="outlined" label="Creator" fullWidth
                value={postData.creator} 
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField className={classes.inputItem} name="title" variant="outlined" label="title" fullWidth
                value={postData.title} 
                onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField className={classes.inputItem} name="message" variant="outlined" label="message" fullWidth
                value={postData.message} 
                onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField className={classes.inputItem} name="tags" variant="outlined" label="tags" fullWidth
                value={postData.tags} 
                onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <StyledButton className={classes.buttonSubmit} size="large" type="submit" fullWidth>Submit</StyledButton>
                <ThemeProvider theme={theme}>
                    {/* <Button className={classes.buttonSubmit} variant="contained" color="primary"
                    size="large" type="submit" fullWidth>Submit</Button> */}
                    <Button variant="contained" color="secondary"
                    size="large" onClick={clear} fullWidth>Clear</Button>
                </ThemeProvider>
            </form>
        </Paper>
    );
};

export default Form;