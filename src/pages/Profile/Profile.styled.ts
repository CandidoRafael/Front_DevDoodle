import styled from "styled-components";


export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProfileHeader = styled.header`
    width: 80%;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    border-radius: .5rem;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.5) 0px 1px 1px 0px;
    background-color: #fff;
    z-index: 0;
    margin-bottom: 1rem;

    @media (max-width: 668px) {
        width: 90%;
    }
`

export const ProfileIconEdit = styled.i`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: var(--color-blue-secondary);
    border-radius: 50%;
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    transition: .5s all linear;

    &:hover {
        color: #fff;
        background-color: var(--color-blue-secondary);
    }
`


export const ProfileImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 50%;
    z-index: -1;
    border-radius: .3rem .3rem 0 0;
`

export const ProfileUser = styled.div`
    padding: 2rem 1rem;
`

export const ProfileAvatar = styled.img`
    width: 13rem;
    border: 3px solid #ddd;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;

    @media (max-width: 668px) {
        width: 6rem;
    }
`

export const ProfileActions = styled.div`
    padding: 1.1rem;
`

export const ProfileIconAdd = styled.i`
    cursor: pointer;
    font-size: 2.2rem;
    color: var(--color-blue-secondary);
    transition: .5s all linear;

    &:hover {
        color: var(--color-blue-primary);
    }
`

export const ProfilePosts = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    
    @media (max-width: 560px) {
      width: 90%;
    }

    span{
        grid-column: 1 / -1;
        text-align: center;
        padding: 1rem;
        font-size: 1.1rem;
    }
`