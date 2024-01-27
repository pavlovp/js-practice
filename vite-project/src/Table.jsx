
const Table = ({ items, deleteAction }) => {
    return (
        <table id="itemsTable" style={{ border: "2px solid" }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                            <button
                                type="button"
                                onClick={() => {
                                    if (deleteAction) {
                                        deleteAction(item.id);
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;