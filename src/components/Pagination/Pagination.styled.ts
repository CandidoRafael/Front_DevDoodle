import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`

export const ButtonPagination = styled.button`
    padding: .7rem 1.7rem;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: .3rem;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    border-radius: .5rem;
    background-color: var(--color-blue-primary);
    transition: .3s all ease-in-out;

    &:hover {
        background-color: var(--color-baby-blue);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`






