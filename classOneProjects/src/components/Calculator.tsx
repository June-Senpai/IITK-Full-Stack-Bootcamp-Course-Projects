import { useReducer } from "react"

// const ACTIONS = {
//   ADD_DIGIT: "add_digit",
//   SUBTRACT_DIGIT: "subtract_digit",
//   CLEAR: "clear",
//   DELETE_DIGIT: "delete_digit",
//   EVALUATE:"evaluate",
// }

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    case ACTIONS.RESET:
      return { count: 0 }
    default:
      return state
  }
}

// const reducer = (state, { type, payload }) => {}
const Calculator = () => {
  // const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <main className="flex flex-col items-center">
      <h1>Calculator</h1>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>clear</button>
      {state.count}
      <section className="bg-slate-300 w-96 h-96">
        {/* <div className="w">
          {previousOperand} {operation}
        </div>
        <div className=""> {currentOperand}</div> */}
        <div>1</div>
        <div>2</div>
      </section>
    </main>
  )
}
export default Calculator
