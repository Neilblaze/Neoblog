import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1190px;
    height: 70px;
    margin: 1.25em auto;

    @media (min-width: 768px){
        height:120px;
    }
`

export const Logo = styled.img`
    max-width: 100px;
    
    
    @media (min-width: 768px){
        max-width:250px;
        margin-right: 35px;
    }
`