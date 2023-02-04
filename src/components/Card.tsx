

const Card = (props: any) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{props.title}</h2>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
};