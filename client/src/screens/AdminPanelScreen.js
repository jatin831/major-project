import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Navbar from '../components/NavbarWithoutButton';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function AdminPanelScreen() {
  const [role, setRole] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
            <Navbar />
          <div className="homepage-container">

              <form>
  <label>
    Enter Address:
    <input type="text" name="name" size="50"/>
  </label>
  
</form>
              
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Select Role to Assign
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Role</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={role}
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Manufacturer</MenuItem>
          <MenuItem value={2}>Third Party</MenuItem>
            <MenuItem value={3}>Delivery Hub</MenuItem>
            <MenuItem value={4}>Customer</MenuItem>
        </Select>
              </FormControl>
              <input type="submit" value="Submit" />
          </div>
          </div>
  );
}

