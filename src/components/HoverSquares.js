import { useSelector } from "react-redux";
import { modeSelector } from "../redux/modes";
import { PROMT, PROMTS_CONTAINER } from "./styled/HoverSquares";

export default function HoverSquares(props) {
  const mode = useSelector(modeSelector);

  return (
    <div style={{ marginLeft: "50px" }}>
      {mode && <h1>Hover squares (scroll)</h1>}
      <PROMTS_CONTAINER>
        {props.squares.map((s, i) => {
          if (s) {
            let raw = Math.trunc(i / mode) + 1;
            let col = i - (raw - 1) * mode + 1;
            return (
              <PROMT key={i + "hover square"}>
                <p>
                  raw {raw} col {col}
                </p>
              </PROMT>
            );
          } else {
            return s;
          }
        })}
      </PROMTS_CONTAINER>
    </div>
  );
}
