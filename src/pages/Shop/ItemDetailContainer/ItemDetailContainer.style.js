import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2rem;
`;

export const DetailContainerBtn = styled.button`
  padding: 8px;
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
  font-size: 1.4rem;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    color: #000;
    background-color: #fff;
  }
`;
