import styled from "styled-components";

export default function Header({ name, onClick }) {
  return (
    <HeaderTag>
      <NameTag>{name}</NameTag>
      <LoginButtonTag onClick={onClick}>Вхід</LoginButtonTag>
    </HeaderTag>
  );
}

const LoginButtonTag = styled.div`
  color: #000;

  padding: 5px 32px;

  border: 2px solid #000;

  border-radius: 15px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const NameTag = styled.div`
  color: #9946be;
  font-size: 25px;
  text-shadow: 4px 4px 7px;
`;

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: linear-gradient(62.93deg, #000 30.68%, #14894b 89.55%);

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */
  color: #fff;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 24px;
`;
