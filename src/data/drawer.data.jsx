import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const drawerData = [
  [
    {
      section: 'triangle',
      name: 'New',
      icon: <AddCircleOutlineRoundedIcon />,
      action: 'newTriangle',
      shortcut: 'Ctrl+N',
    },
  ],

  [
    {
      section: 'model',
      name: 'New',
      icon: <AddCircleOutlineRoundedIcon />,
      action: 'newModel',
      shortcut: 'Ctrl+Shift+N',
    },
  ],

  [
    {
      section: 'workspace',
      name: 'New',
      icon: <AddCircleOutlineRoundedIcon />,
      action: 'newFile',
      shortcut: 'Ctrl+Alt+N',
    },
    {
      section: 'workspace',
      name: 'Open',
      icon: 'folder_open',
      action: 'openFile',
      shortcut: 'Ctrl+Alt+O',
    },
    {
      section: 'workspace',
      name: 'Save',
      icon: 'save',
      action: 'saveFile',
      shortcut: 'Ctrl+Alt+S',
    },
  ],
];

export default drawerData;
