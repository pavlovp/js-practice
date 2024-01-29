
const renderElement = (element) => {
    if (!element) {
        return <div>End</div>
    }
    if (element.type === 'file') {
        return <div key={element.id}> -{element.name}</div>;
    }
    else if (element.type === 'dir') {
        let childrenJsx = null;
        if (element.children && Array.isArray(element.children)) {
            childrenJsx = element.children.map(ch => renderElement(ch))
        }
        return (
            <div key={element.id}>
                <div>dir: {element.name}</div>
                <div className="dir">
                    {childrenJsx}
                </div>
            </div>
        )
    }
};

const Files = ({ data }) => {
    let res = []
    data.forEach(element => res.push(renderElement(element)))
    return <div>{res}</div>; // Use <div> to wrap the result
};


export default Files
