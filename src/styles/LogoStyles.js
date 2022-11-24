import styled from "styled-components"

export const LogoImg = styled.img`
height: ${props => props.height ? props.height[0] : "36px"};
display: block;

@media (min-width: 600px) {
    height: ${props => props.height ? props.height[1] : "40px"};
}
`;
