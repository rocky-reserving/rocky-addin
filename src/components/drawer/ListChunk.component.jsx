import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import listSection from './listSection.data.jsx';

const ListChunk = ({
  sectionID,
  buttonMinHeight = 48,
  buttonPadding = 2.5,
  iconMinWidth = 0,
  open = false,
  text = 'hi',
}) => {
  // const { title, menu } = listSection[sectionID];
  return (
    <List>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: { buttonMinHeight },
            justifyContent: open ? 'initial' : 'center',
            px: { buttonPadding },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: { iconMinWidth },
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {/* {icon} */}
            <AddCircleOutlineRoundedIcon />
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default ListChunk;
