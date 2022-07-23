export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {

  const handleDelete = () => {
    if (window.confirm('¿Seguro quiere eliminar las taresas realizadas?'))
      cleanTasks()
  }

  return (
    <div className="d-flex justify-content-between bg-secondary p-2 border-secondary">

      <div className="form-check form-switch">
        <input type="checkbox"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        {" "}
        <label>Show Task Done</label>
      </div>

      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Clear
      </button>

    </div>
  )
}