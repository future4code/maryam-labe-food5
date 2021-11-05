import styled from 'styled-components'

export const Buttons = styled.button`
    border:none;
    background-color: transparent;
    margin: 6px;
    padding-left: 10px;
    padding-right: 10px;
    :hover{
        color:#5cb646;
    }
    :active{
        color: yellowgreen;
    }
`
export const containerButtons = styled.div`
    display: flex;
    width: 100vw;
    height:200px;
`
export const cardContained = styled.div`
    margin: 5px;
`