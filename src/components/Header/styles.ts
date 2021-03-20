  
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--grey);
  height: 60px;
  margin-bottom: 5px;
  div {
    display: flex;
    align-items: center;
    svg {
      font-size: 45px;
      cursor: pointer;
      margin: 0 10px;
      color: var(--black);
    }
    div {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      svg {
        font-size: 45px;
        cursor: pointer;
        margin: 0 10px;
        color: var(--black);
      }
    }
  }
`;