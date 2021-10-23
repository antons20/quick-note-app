import React, { Component } from "react";
import { Button, FormControl, TextField, Paper } from "@material-ui/core";
import { withRouter } from "react-router";

const styles = {
    form: {
        marginTop: "2rem",
        marginBottom: "1rem",
        padding: "1rem"
    },
    paper: {
        marginBottom: "1rem",
        
    }
}



class UpsertNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "", 
            text: "", 
        }
    }

    componentDidMount() {
        const { state } = this.props.location;
        if (state) {
            const { title, text, id } = state;
            this.setState({
                title, 
                text, 
                id 
            })
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
            <form style={styles.form}>
                <Paper elevation={3} style = {styles.paper}>
                    <FormControl fullWidth>
                        <TextField 
                        label = "title" 
                        variant="outlined"
                        value = {title}
                        onChange = {this.updateTitle}
                        />
                    </FormControl>
                </Paper>

                <Paper elevation={3} style = {styles.paper}>
                    <FormControl fullWidth>
                        <TextField 
                            label = "text" 
                            variant ="outlined"
                            multiline
                            rows={6}
                            value = {text}
                            onChange={this.updateText}
                            
                        />
                    </FormControl>
                </Paper>
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