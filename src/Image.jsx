function Image(props) {
    return (
        <img
            className="rugratsImage"
            src={props.source}
            width={props.width}
        />
    );
}

export default Image;