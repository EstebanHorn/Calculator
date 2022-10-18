import "../stylesheets/ButtonClear.css"

function ButtonClear(props){
    return(
        <div className="button-clear" onClick={props.click}>
            Clear
        </div>
    );
}

export default ButtonClear