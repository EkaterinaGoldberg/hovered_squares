import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Square from "./components/Square";
import CONTAINER from "./components/styled/Container";
import { getModeRedux } from "./redux/modes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModeRedux());
  }, [dispatch]);

  return <CONTAINER>

  <Square/>
  </CONTAINER>
}

export default App;
