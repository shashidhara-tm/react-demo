import { Button } from './Button'

function TodoList({ todoList, onMarkAsCompleted, onDelete }) {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Sl no</th>
          <th>Todo Title</th>
          <th>Is Completed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todoItem, index) => (
          <tr key={todoItem.id}>
            <td>{index + 1}</td>
            <td>{todoItem.title}</td>
            <td>{todoItem.isCompleted ? 'Completed' : 'Not Completed'}</td>
            <td>
              {!todoItem.isCompleted && (
                <Button
                  type="action"
                  onClick={() => onMarkAsCompleted(todoItem.id)}
                  label="Mark as completed"
                />
              )}
              <Button
                type="danger"
                onClick={() => onDelete(todoItem.id)}
                label="Delete"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { TodoList }
