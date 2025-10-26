const TodoItem = ({ todoItem, todoDate }) => {

    return <div>
        <div className="container">

            <div className="row int-row">
                <div className="col-6">
                    {todoItem}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger int-button">Delete</button>
                </div>
            </div>
        </div>
    </div>
}

export default TodoItem;