import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

// 图标种类 ShoppingCartIcon PeopleIcon BarChartIcon  DashboardIcon
export const mainListItems = (
    <div>

        <ListItem button>
            <ListItemText primary="可回收物"/>
        </ListItem>


        <ListItem button>
            <ListItemText primary="有害垃圾"/>
        </ListItem>

        <ListItem button>
            <ListItemText primary="有机垃圾"/>
        </ListItem>

        <ListItem button>
            <ListItemText primary="其他垃圾"/>
        </ListItem>

        <ListItem button>
            <ListItemText primary="测试"/>
        </ListItem>

        {/*    <ListItem button>
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="液体垃圾"/>
        </ListItem>
  */}
    </div>
);
