import React, { Component } from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import { withRouter } from "react-router";


class UpsertNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "", 
            text: "", 
        }
    }


    updateTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }


    updateText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleCancel = (event) => {
        event.preventDefault();
        this.props.history.push("/");
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.upsertNote(this.state);
        this.props.history.push("/");
    }

    render() {
        const { title, text } = this.state;
        return (
            <form>
                <FormControl fullWidth>
                    <TextField 
                    label = "title" 
                    variant="outlined"
                    value = {title}
                    onChange = {this.updateTitle}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField 
                        label = "text" 
                        variant ="outlined"
                        multiline
                        rows={4}
                        value = {text}
                        onChange={this.updateText}
                        
                    />
                </FormControl>
                <Button 
                    color="secondary" 
                    onClick={this.handleCancel} 
                >
                    Cancel
                </Button>
                <Button 
                    color="primary"
                    onClick={this.handleSubmit} 
                >
                    Submit
                </Button>
            </form>

        );
    }   
}

export default withRouter(UpsertNote);