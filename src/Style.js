import { motion } from "framer-motion";
import styled from "styled-components";
export const About = styled(motion.div)`
  display: flex;
  /* max-height: 100vh; */
  min-height: 80vh;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  color: white;
  @media screen and (max-width: 862px) {
    padding: 0rem;
    height: 100vh;
  }
`;
export const Description = styled.div`
  font-weight: lighter;
  padding-right: 5rem;
  flex: 1;
  z-index: 2;
  @media screen and (max-width: 862px) {
    padding: 2rem;
  }
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
  @media screen and (max-width: 862px) {
    position: absolute;
    mix-blend-mode: overlay;
    background: #3c3c3c;
    width: 100%;
    img {
      height: 100vh;
    }
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
