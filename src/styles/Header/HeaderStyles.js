import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 60px;
  width: 100%;
  top: 0;
  background: linear-gradient(269.88deg, #009c92 -2.51%, #06304c 51.96%);
  color: white;
  z-index: 1;

  @media (min-width: 600px) {
      height: 72px;
  }
`;

export const LeftNav = styled.div`
  margin-left: 3%;
  display: flex;
  align-items: center;
  gap: 3vw;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: white;
`;

export const NavText = styled.span`
  display: none;
  font-size: var(--h4-size);
  font-weight: 600;
  margin-top: 3px;

  @media (min-width: 600px) {
        display: block;
    }
}
`;
