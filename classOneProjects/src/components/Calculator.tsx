import { Reducer, useReducer } from "react"

type State = {
  currentOperand: string | null
  previousOperand: string | null
  operation: string | null
  overwrite?: boolean | undefined
}

type Action = {
  type: string
  payload?: {
    digit?: string
    operation?: string
  }
}

const ACTIONS = {
  ADD_DIGIT: "add_digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
} as const

function reducer(state: State, action: Action): State {
  const { type, payload } = action
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      // for overwriting current operand
      if (payload) {
        if (state.overwrite && payload && payload.digit) {
          return { ...state, currentOperand: payload.digit, overwrite: false }
        }
        // dont add multiple zeros in the beginning
        if (payload.digit === "0" && state.currentOperand === "0") return state
        // only one decimal allowed
        if (payload.digit === "." && state.currentOperand && state.currentOperand.includes("."))
          return state
        // making current operation by iteration of current and digit
        return { ...state, currentOperand: `${state.currentOperand || ""}${payload.digit}` }
      }
      return state
    case ACTIONS.CHOOSE_OPERATION:
      if (payload && payload.operation) {
        // this if is for if the user doesnt start with a number we dont allow him to choose an operation
        if (state.currentOperand === null && state.previousOperand === null) return state
        // setting current operation to previous operation
        if (state.previousOperand === null) {
          return {
            ...state,
            operation: payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: null,
          }
        }
        // for changing current operation to new operation while keeping currentOperand
        if (state.currentOperand === null) {
          return {
            ...state,
            operation: payload.operation,
          }
        }
        // for calculation without equal sign
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: payload.operation,
          currentOperand: null,
        }
      }
      return state
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        // to delete everthing
        return { ...state, currentOperand: null, overwrite: false }
      }
      if (state.currentOperand === null) return state
      if (state.currentOperand.length === 1)
        return {
          ...state,
          currentOperand: null,
        }
      // to empty
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
    case ACTIONS.CLEAR:
      return { currentOperand: null, previousOperand: null, operation: null }
    case ACTIONS.EVALUATE:
      if (
        state.currentOperand === null ||
        state.previousOperand === null ||
        state.operation === null
      )
        return state
      // for calculation of = sign and setting overwrite to true
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }
    default:
      return state
  }
}

function evaluate({ currentOperand, operation, previousOperand }: State) {
  const prev = parseFloat(previousOperand || "")
  const current = parseFloat(currentOperand || "")
  if (isNaN(prev) || isNaN(current)) return ""
  let computation = 0
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "/":
      computation = prev / current
      break
  }
  return computation.toString()
}

// for formatting the digits while making sure we dont format decimal one
const INTEGER_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
})

function formatOperand(operand: string | null) {
  if (operand === null) return
  const [integer, decimal] = operand.split(".")
  if (decimal === undefined) return INTEGER_FORMATTER.format(Number(integer))
  else return operand
}

const initialState = {
  currentOperand: null,
  previousOperand: null,
  operation: null,
}

const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer<
    Reducer<State, Action>
  >(reducer, initialState)
  console.log({ currentOperand, operation, previousOperand })
  return (
    <main className="flex flex-col items-center ">
      <h1>Calculator</h1>
      <div className="bg-slate-300 w-[245px] mt-2 text-2xl text-right rounded-t-lg p-2">
        <div className="bg-green-300 rounded-lg p-2 w-full border-2 border-white">
          {operation ? (
            <div className="">
              {formatOperand(previousOperand)} {operation}
            </div>
          ) : (
            <br />
          )}
          {currentOperand ? <div className="w">{formatOperand(currentOperand)}</div> : <br />}
        </div>
      </div>
      <section className="bg-slate-300 grid grid-cols-3 gap-2 p-4 rounded-b-lg">
        <button onClick={() => dispatch({ type: ACTIONS.CLEAR })} className="hover:bg-green-200">
          Clear
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
          className="hover:bg-red-300">
          Delete
        </button>
        <DigitButton dispatch={dispatch} digit="." />
        <DigitButton dispatch={dispatch} digit="1" />
        <DigitButton dispatch={dispatch} digit="2" />
        <DigitButton dispatch={dispatch} digit="3" />
        <DigitButton dispatch={dispatch} digit="4" />
        <DigitButton dispatch={dispatch} digit="5" />
        <DigitButton dispatch={dispatch} digit="6" />
        <DigitButton dispatch={dispatch} digit="7" />
        <DigitButton dispatch={dispatch} digit="8" />
        <DigitButton dispatch={dispatch} digit="9" />
        <DigitButton dispatch={dispatch} digit="0" />
        <OperationButton dispatch={dispatch} operation="+" />
        <OperationButton dispatch={dispatch} operation="-" />
        <OperationButton dispatch={dispatch} operation="*" />
        <OperationButton dispatch={dispatch} operation="/" />
        <button
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          className="bg-slate-400/50 p-2 rounded-lg hover:opacity-75">
          =
        </button>
      </section>
    </main>
  )
}
export default Calculator

const DigitButton = ({ dispatch, digit }: { dispatch: React.Dispatch<Action>; digit: string }) => {
  return (
    <button
      className="bg-slate-200 p-2 rounded-lg hover:opacity-75"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
      {digit}
    </button>
  )
}

const OperationButton = ({
  dispatch,
  operation,
}: {
  dispatch: React.Dispatch<Action>
  operation: string
}) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
      className=" bg-slate-400/50 p-2 rounded-lg hover:opacity-75">
      {operation}
    </button>
  )
}
