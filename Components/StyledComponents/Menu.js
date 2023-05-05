import styled from "@emotion/styled";

export const Menu = styled.a`
  margin: 0 2rem;
  color: #fff;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left:0;
    bottom:0;
    width:100%;
    height:2px;
    background-color:#fff;
    transform:scaleX(0);
    transition-origin:center;
    transition:transform 0.3s ease-in-out;
  }
  &:hover:before {
    transform:scaleX(1);
  }
`;
