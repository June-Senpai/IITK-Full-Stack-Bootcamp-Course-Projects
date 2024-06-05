import { useReducer, useState } from "react"

const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  EDIT_TODO: "edit-todo",
  TOGGLE_TODO: "toggle-todo",
  SET_EDITING: "set-editing",
}

const reducer = (todoList, action) => {
  switch (action.type) {
    // case ACTIONS.ADD_TODO:
    //   return [...todoList, action.payload]
    case ACTIONS.ADD_TODO:
      return [...todoList, todoValues(action.payload)]
    case ACTIONS.DELETE_TODO:
      return todoList.filter((_, index) => index !== action.payload)
    case ACTIONS.TOGGLE_TODO:
      return todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.EDIT_TODO:
      return todoList.map((todo, index) =>
        index === action.payload.index
          ? { ...todo, name: action.payload.newName, editing: false }
          : todo
      )
    case ACTIONS.SET_EDITING:
      return todoList.map((todo, index) =>
        index === action.payload.index ? { ...todo, editing: action.payload.editing } : todo
      )
    default:
      return todoList
  }
}

const todoValues = (name) => {
  return {
    id: Date.now(),
    name,
    completed: false,
    editing: false,
  }
}

const Todo = () => {
  const [todoList, dispatch] = useReducer(reducer, [])
  const [newTodo, setNewTodo] = useState("")

  const handleSubmit = (
    e: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement, EventTarget>
  ) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: newTodo })
    setNewTodo("")
  }

  const handleEditSubmit = (e, index) => {
    e.preventDefault()
    const newName = e.target.elements.editInput.value
    dispatch({ type: ACTIONS.EDIT_TODO, payload: { index, newName } })
  }
  return (
    <main className="flex flex-col items-center gap-4 text-2xl">
      <h1>Todo</h1>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={newTodo}
          name=""
          id=""
          autoFocus
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {todoList.map((todo, todoIndex) => (
        <div key={todoIndex} className="text-2xl flex items-center justify-center gap-4">
          <input
            type="checkbox"
            onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
            checked={todo.complete}
            readOnly
            className="h-4 w-4"
          />
          {todo.editing ? (
            <form onSubmit={(e) => handleEditSubmit(e, todoIndex)}>
              <input type="text" name="editInput" defaultValue={todo.name} className="text-2xl" />
              <button type="submit">Save</button>
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: ACTIONS.SET_EDITING,
                    payload: { index: todoIndex, editing: false },
                  })
                }>
                Cancel
              </button>
            </form>
          ) : (
            <>
              {todo.complete ? (
                <p>
                  <s>{todo.name}</s>
                </p>
              ) : (
                <p>{todo.name}</p>
              )}
              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.SET_EDITING,
                    payload: { index: todoIndex, editing: true },
                  })
                }>
                Edit
              </button>
              <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todoIndex })}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </main>
  )
}
export default Todo
