import styled from "styled-components";

const MAIN_SQUARE = styled.div`
  width: ${(props) => 50 * props.width}px;
  display: flex;
  flex-wrap: wrap;
`;
const SQUARE = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
`;

export { MAIN_SQUARE, SQUARE };
