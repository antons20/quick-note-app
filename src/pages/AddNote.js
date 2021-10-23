import { Button, FormControl, TextField } from "@material-ui/core";

function AddNote(props) {
    const { changeView } = props;
    return (
        <form>
            <FormControl fullWidth>
            <TextField label = "title" variant="outlined"/>
            </FormControl>

            <FormControl fullWidth>
                <TextField 
                    label = "text" 
                    variant ="outlined"
                    multiline
                    rows={4}
                    
                />
            </FormControl>
            <Button color="secondary" onClick={() => changeView()}>Cancel</Button>
            <Button color="primary">Submit</Button>
        </form>

    );
}

export default AddNote;