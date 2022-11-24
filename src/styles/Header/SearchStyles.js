import styled from "styled-components"

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  gap: 6px;

  .searchInput {
    border-radius: 6px;
    height: 40px;
    max-width: 440px;
    padding-left: 10px;
    padding-right: 38px;
    width: 48vw;
  }

  .searchIcon {
    position: absolute;
    right: 10px;
  }
`;
