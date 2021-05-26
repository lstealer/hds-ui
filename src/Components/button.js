import {Button} from 'react-bootstrap';
function BCButton(props){
    return (
        <Button  variant={props.color}
           
        >
            {props.text}

        </Button>
    );
}
export default BCButton;