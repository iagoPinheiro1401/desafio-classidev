import styled from "styled-components"

import Class from "../layout/class/class"
import Date from "../layout/date/date"

const StyledClass = styled.div`
    width: 334px;
    height: 313px;
    border-radius: 10px;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 29px;
    padding: 0 24px;
    cursor: pointer;
    word-wrap: break-word;

    @media (max-width: 400px) {
        max-width: 310px;
        height: 290px;
        gap: 20px;
    } 
`

const ProductsAndDate = styled.div`
    display: flex;
    flex-direction: column;
`

const Product = styled.h2`
    font-size: 36px;
    font-weight: 700;
    line-height: normal;

    @media (max-width: 425px) {
        font-size: 26px;
        font-weight: 500;
    } 
`

const Price = styled.h4`
    color: #0E0E0E;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    position: relative;
    bottom: 16px;
`

const Description = styled.p`
    font-size: 14px;
    font-style: italic;
    font-weight: 300;
`

export default function Classefields({ category, product, price, date, description, onClick }) {
    return(
            <StyledClass onClick={onClick}>
                <ProductsAndDate>
                    <Product>{product}</Product>
                    <Date>{date}</Date>
                </ProductsAndDate>
                <Price>R$ {price}</Price>
                <Description>{description}</Description>
                <Class
                    category={category}
                />
            </StyledClass>
    )
}