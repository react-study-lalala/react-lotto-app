import React from 'react';
import styled from "styled-components"

class LottoNumber extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {number} = this.props;
        return (
            <Number number={number}>
                {number}
            </Number>
        );
    }
}

const lottoColor = (number) => {

    console.log(number);
    let color = "white";
    if(number < 11) {
        color = "#d0d012"
    }else if (number < 21) {
        color = "blue";
    }else if (number < 31) {
        color = "red";
    }else if (number < 41) {
        color = "black";
    }else {
        color = "green";
    }
    return color;
};

const Number = styled.div`
    background-color : ${props => lottoColor(props.number)};
    display : inline-block;
    color : #FFFFFF;
    width : 50px;
    height : 50px;
    border-radius : 50px;
    line-height:50px;
    text-align:center;
    margin : 5px;
    border : 1px solid black;
`;


export default LottoNumber;