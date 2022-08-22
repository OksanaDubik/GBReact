import React from 'react';
import List from '@mui/material/List';
import ListItems from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export const ListItem = () => {

    return (
        <List sx={{ width: '30%', maxWidth: 360, backgroundColor: "#172674", margin: "20px 0 0 20px",paddingLeft:"15px", color: "white" }}>
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItems
                        key={value}
                        disablePadding
                    >
                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />

                    </ListItems>
                );
            })}
        </List>
    );

}
