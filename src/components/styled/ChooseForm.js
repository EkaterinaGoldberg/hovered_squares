import styled from "styled-components";

const FORM = styled.form`
  width: ${(props) => 50 * props.width}px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
`;

const SELECT = styled.select`
  width: 70%;
  padding: 10px;
  outline: none;
`

const START = styled.button`
  width: 25%;
  padding: 10px;
  background-color: blue;
  border: transparent;
  color: #fff;
  border-radius: 5px;

  :hover{
    cursor: pointer;
  }
`

export { FORM, SELECT, START };
