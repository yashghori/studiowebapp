import styled from "styled-components";
export const About = styled.div`
  display: flex;
  /* max-height: 100vh; */
  min-height: 80vh;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  color: white;
`;
export const Description = styled.div`
  font-weight: lighter;
  padding-right: 5rem;
  flex: 1;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  overflow: hidden;
  z-index: 2;
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
