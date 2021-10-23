import React, { Component } from "react";

import { List, ListItem, ListItemText, Collapse, ListItemIcon, Button} from "@material-ui/core";
import { ExpandMore, ExpandLess , Delete} from "@material-ui/icons"


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClick = () => {
        this.setState({ open: !this.state.open})
    }

    render() {
        const { note, deleteNote } = this.props;
        const { open } = this.state;
        return (
            <>
                <ListItem >
                    <ListItemIcon onClick={this.handleClick}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary = {note.title}/>


                    <ListItemIcon>
                        <Button onClick={() => deleteNote(note)}> 
                            <Delete />
                        </Button>
                    </ListItemIcon>

                    
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit> 
                    <List component= "div" disablePadding>
                        <ListItem>
                            <ListItemText secondary = {note.text}/>
                        </ListItem>
                    </List>
                </Collapse>
                
            </>
        );
    }


}

export default Note;