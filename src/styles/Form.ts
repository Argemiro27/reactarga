import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  div {
    display: flex;
    margin: 5px 0;
    label {
      padding: 10px;
      width: 25%;
    }
    input, select, textarea {
      width: 75%;
    }
  }
`;
export default Form;