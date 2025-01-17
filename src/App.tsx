import { useReducer } from "react";

type StateType = {
  count: number
}

const initialState: StateType = {
  count: 0
}

type ActionType = { type: "Increment", payload: number } | { type: "Decrement", payload: number }

const App = () => {

  const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + action.payload }
      case "Decrement":
        return { count: state.count - action.payload }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const Increment = (): void => {
    dispatch({
      type: "Increment",
      payload: 1
    })
  }

  const Decrement = (): void => {
    dispatch({
      type: "Decrement",
      payload: 1
    })
  }

  return (
    <div>
      <h1>useReducer Hook</h1>

      <p>Count: {state.count}</p>
      <br />
      <button onClick={Increment}>Increment</button>
      <br />
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default App