import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { modeSelector } from "../redux/modes";
import { nanoid } from "nanoid";
import HoverSquares from "./HoverSquares";
import ChooseForm from "./ChooseForm";
import { MAIN_SQUARE, SQUARE } from "./styled/Squares";
import WRAPPER from "./styled/Wrapper";

export default function Square() {
  const mode = useSelector(modeSelector);

  const [squares, setSquare] = useState([]);

  useEffect(() => {
    setSquare(Array(Math.pow(mode, 2)).fill(false));
  }, [mode]);

  return (
    <Fragment>
      <ChooseForm mode={mode} />
      <WRAPPER>
        <MAIN_SQUARE width={mode}>
          {squares.map((e, index) => {
            return (
              <SQUARE
                key={nanoid()}
                id={index}
                onMouseOver={(e) => {
                  if (e.target?.id !== e.relatedTarget?.id) {
                    let tmp = squares[index];
                    setSquare(
                      squares.map((e, i) => {
                        return i === index ? !tmp : e;
                      })
                    );
                  }
                }}
                style={{ backgroundColor: squares[index] && "blue" }}
              />
            );
          })}
        </MAIN_SQUARE>
        <HoverSquares key={nanoid()} squares={squares} />
      </WRAPPER>
    </Fragment>
  );
}
