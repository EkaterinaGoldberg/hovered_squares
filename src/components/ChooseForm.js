import { useDispatch } from "react-redux";
import { chooseModeRedux } from "../redux/modes";
import { FORM, SELECT, START } from "./styled/ChooseForm";

export default function ChooseForm(props) {
  const dispatch = useDispatch();

  return (
    <FORM
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(chooseModeRedux(e.target.mode.value));
      }}
      width={props.mode || 5}
    >
      <SELECT name="mode">
        <option disabled defaultValue>
          Pick mode
        </option>
        <option value="0">Easy</option>
        <option value="1">Normal</option>
        <option value="2">Hard</option>
      </SELECT>
      <START>START</START>
    </FORM>
  );
}
