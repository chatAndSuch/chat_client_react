import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import fetchy from '../utils/fetch';
import axios from 'axios'

export default function PopForm(props) {
  const [open, setOpen] = React.useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [avatarValue, setAvatarValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleRegi = () => {
    let thing = {u:usernameValue,p:passwordValue,a:avatarValue}
    // fetchy(thing, 'http://localhost:4001/new/user')
    // fetchy(thing, 'http://localhost:4001/new/user').catch(error => {
    //    console.error(error); // 'An error has occurred: 404'
    //   });
      
      // fetchy(thing, 'http://localhost:4001/new/user').then(data=>console.log(data))
      let ok = axios.post('http://localhost:4001/new/user', thing)
      .then(function (response) {
        // console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
      
      ok.then(dat=> console.log(dat.data));
  }

  const onUsernameChange = (e) => setUsernameValue(e.target.value);
  
  const onPasswordChange = (e) => setPasswordValue(e.target.value);
  
  const onAvatarChange = (e) => setAvatarValue(e.target.value);

  const handleClose = () => {
      
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" 
      size="small" onClick={handleClickOpen}>
       {props.buttonType}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Create and choose an annonymouse username, password, which will be hashed, and an avatar.
          </DialogContentText>
          <TextField
           onChange={onUsernameChange}
           value={usernameValue}
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="username"
            fullWidth
            variant="standard"
          />
          <TextField
           onChange={onPasswordChange}
           value={passwordValue}
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
           onChange={onAvatarChange}
           value={avatarValue}
            autoFocus
            margin="dense"
            id="avatar"
            label="Avatar URL"
            type="avatar"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRegi}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
