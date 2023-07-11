'use client';

import { useState } from 'react';

import MiniDrawer from './drawer/Drawer.component';
import drawerData from '@/data/drawer.data';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <MiniDrawer
      anchor="top"
      open={open}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      iconStyle={{
        marginRight: 5,
        ...(open && { display: 'none' }),
      }}
      listItemStyle={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
      listItemIconStyle={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
      content={drawerData}
    />
  );
};

export default Drawer;
