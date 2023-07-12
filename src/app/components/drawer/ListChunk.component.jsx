import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';

const ListChunk = ({
  section,
  subSections,
  buttonMinHeight = 48,
  buttonPadding = 2.5,
  iconMinWidth = 0,
  open = false,
  text = 'hi',
}) => {
  const listItemStyle = { display: 'block' };

  const listItemButtonStyle = {
    minHeight: { buttonMinHeight },
    justifyContent: open ? 'initial' : 'center',
    px: { buttonPadding },
  };

  const listItemIconStyle = {
    minWidth: { iconMinWidth },
    mr: open ? 3 : 'auto',
    justifyContent: 'center',
  };

  const listItemTextStyle = { opacity: open ? 1 : 0 };

  return (
    <List>
      {/* {section[subSections].map((item, index) => (
        <ListItem
          disablePadding
          sx={listItemStyle}
          key={index}
          onClick={item.action}
        >
          <ListItemButton sx={listItemButtonStyle}>
            <ListItemIcon sx={listItemIconStyle}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} sx={listItemTextStyle} />
          </ListItemButton>
        </ListItem>
      ))} */}
    </List>
  );
};

export default ListChunk;
