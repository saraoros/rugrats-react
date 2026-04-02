function Image(props) {
    return (
        <div className="character-card">
            <img
                className="rugratsImage"
                src={props.source}
                alt={props.name}
            />
            <p className="character-name">{props.name}</p>
        </div>
    );
}

export default Image;