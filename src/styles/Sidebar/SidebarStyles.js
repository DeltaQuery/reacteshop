import styled from "styled-components"
import "../../index.css"

export const SidebarDiv = styled.div`
position: fixed;
width: 360px;
max-width: 98%;
top: 60px;
height: calc(100% - 60px);
transition: all .5s ease;
background-color: white;
z-index: 1;
box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);
clip-path: inset(0px -20px 0px 0px);
display: flex;
flex-direction: column;
align-items: center;
padding-top: 1rem;
gap: 1rem;
padding-bottom: 1rem;
flex: 0.25;
pointer-events:auto !important;
overflow: scroll;
left: ${props => props.position ? props.position : "-2000px"};

.CategoryTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: var(--reg-size);
  font-weight: 600;
  color: var(--main-blue);
}

.SidebarContent {
  padding-top: 1.6rem;
    width: 94%;
    display: flex;
    gap: 2.4rem;
    flex-direction: column;
    justify-content: center;
    border: 1px solid var(--med-gray);
    border-radius: 6px;
    padding-bottom: 1.6rem;
}

.CategoryItem {
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--main-blue);
}

.RedirectLink:hover {
  text-decoration: underline;
}

@media (min-width: 600px) {
  top: 72px;
  height: calc(100% - 72px);
}
`;

/*
position: fixed;
    height: calc(100vh - 60px);
    overflow-x: scroll;
    max-width: 360px;
    width: 100%;
    transition: all .5s ease;
    background-color: white;
    z-index: 2;
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);
    clip-path: inset(0px -20px 0px 0px);
    overflow-y: scroll;
    */
//usar prop para que left sea 0 si es true y -2000 si es false

/*.sidebar {
    position: fixed;
    overflow-x: scroll;
    max-width: 360px;
    width: 100%;
    transition: all .5s ease;
    background-color: #2f3135;
    z-index: 2;
    clip-path: inset(0px -20px 0px 0px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    flex: 0.25;
    //height: 100%;
    //era vh
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .sidebarHidden {
    left: -2000px;
  }
  
  .sidebarDisplayed {
    left: 0;
  }
  
  .expandMoreIcon {
    cursor: pointer;
  }
  
  .sidebar::-webkit-scrollbar {
    display: none;
  }*/