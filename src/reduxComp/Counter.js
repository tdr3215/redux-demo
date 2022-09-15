import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
const Counter = () => {



  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button
          aria-label="Increment Value"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(5));
          }}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  );
};
export default Counter;
