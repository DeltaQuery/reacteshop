import styled from "styled-components"
import "../index.css"

export const Separator = styled.div`
    border-bottom: 1px solid var(--med-gray);
    width: 100%;

    &.group,
    &.cart,
    &.sidebar {
        display: none;
    }
`;