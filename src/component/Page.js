import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(
    0deg,
    rgba(153, 70, 190, 1) 33%,
    rgba(20, 137, 75, 1) 100%
  );

  /* робимо фон на всю ширину */
  width: 100%;
`;
