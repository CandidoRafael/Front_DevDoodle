import styled from "styled-components";

export const UlMenu = styled.ul`
    list-style-type: none;

    li {
        height: 50px;
        display: flex;
        font-size: 1.15rem;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        padding-right: .5rem;
        border-radius: 5px;
        margin-top: 10px;
        cursor: pointer;
        transition: .4s all ease-in-out;

        &:hover {
            background-color: var(--color-blue-primary);
            color: #f8f8f8;
        }

        &:last-child {
            margin-top: 50px;
        }
    }
`

export const ContainerClose = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 60px;
    margin-bottom: 1rem;

    svg{
        font-size: 1.5rem;
        margin-right: 5px;
    }
`




