// import { store } from "../Redux/store"
import {useDispatch,  useSelector} from "react-redux"
import { addCount } from "../Redux/action"
export const Counter = () => {

    const dispatch = useDispatch();

    // it can controll rre Rndering
    // const count = useSelector((store) => store.count)


    // can control re-rendering 
    const store = useSelector((store) => store)

    console.log("Rendering Count")

    // console.log(store.getState())
    return (
        <div>
            {/* <h3>Count : {store.getState().count}</h3> */}
            <h3>Count : {store.count}</h3>
            <button onClick={() => {
            //    store.dispatch({type:"ADD_COUNT", payload:1})
            dispatch(addCount(1));
            }}>
                Add 1
            </button>

        </div>
    )
}