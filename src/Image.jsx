
function Image(props) {

    return (
        <img
            src={props.source}
            width={props.width}
            style={{
                borderRadius: "15px",
                margin: "20px",
                border: "5px solid red"
            }}
        />
    );
}

export default Image;