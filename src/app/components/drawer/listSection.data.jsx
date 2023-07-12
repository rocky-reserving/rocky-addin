import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';

const handleClickNewModel = () => {
  console.log('New Model');
};

const handleClickLoadModel = () => {
  console.log('Load Model');
};

const handleClickSaveModel = () => {
  console.log('Save Model');
};

const handleClickLoadTriangle = () => {
  console.log('Load Triangle');
};

const handleClickLoadTriangleFromFile = () => {
  console.log('Load Triangle From File');
};

const handleClickLoadTriangleFromClipboard = () => {
  console.log('Load Triangle From Clipboard');
};

const listSection = [
  {
    title: 'System',
    menu: [
      {
        text: 'New Model',
        icon: <AddCircleOutlineRoundedIcon />,
        type: 'label',
        onClick: handleClickNewModel,
      },
      {
        text: 'Load Model',
        icon: <FolderOpenRoundedIcon />,
        type: 'label',
        onClick: handleClickLoadModel,
      },
      {
        text: 'Save Model',
        icon: <SaveAltRoundedIcon />,
        type: 'label',
        onClick: handleClickSaveModel,
      },
    ],
  },
  {
    title: 'Data',
    menu: [
      {
        text: 'Load Triangle',
        icon: <AddCircleOutlineRoundedIcon />,
        type: 'accordion',
        onClick: handleClickLoadTriangle,
        children: [
          {
            text: 'From File',
            onClick: handleClickLoadTriangleFromFile,
          },
          {
            text: 'From Clipboard',
            onClick: handleClickLoadTriangleFromClipboard,
          },
        ],
      },
    ],
  },
];

export default listSection;
