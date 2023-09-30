import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function PhoneMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopyToClipboard = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      handleClose();
      alert(`Number ${phoneNumber} copied to clipboard.`);
    });
  };

  return (
    <div>
      <Button
        id="phone-button"
        aria-controls={open ? 'phone-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ fontSize: '1.5rem' }}
      >
        📞 
      </Button>
      <Menu
        id="phone-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom', // Position the menu below the button
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleCopyToClipboard('9500066126')}>
          9500066126
        </MenuItem>
        <MenuItem onClick={() => handleCopyToClipboard('7338798098')}>
          7338798098
        </MenuItem>
        <MenuItem onClick={() => handleCopyToClipboard('8098003020')}>
          8098003020
        </MenuItem>
      </Menu>
    </div>
  );
}
