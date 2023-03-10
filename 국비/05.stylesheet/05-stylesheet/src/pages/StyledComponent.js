import React from "react";

/**
 * 컴포넌트 코드 안에서 SCSS 문법을 적용한 컴포넌트를 직접 정의
 * 패키지 설치가 필요함
 * yarn add styled-components
 * VSCode에서 styled-components 지원을 위한 확장프로그램
 * -vscode-styled-components
*/

// 기능 사용을 위한 참조
import styled, {css} from 'styled-components';

// ul 태그로 구성된 컴포넌트 정의 -> styled.태그이름``; (역따옴표 주의)
const MyGridContainer = styled.ul`
    /* SCSS 코딩 진행 */
    list-style: none;
    padding: 0;
    margin: 0;
    width: 1024px;
    border: 5px solid #cc0;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
// li태그로 구성된 컴포넌트 정의
const MyGridItem = styled.li`
    /* width: ${function (props) {
        return props.width
    }} */
    width: ${props => props.width};
`

// div태그로 구성된 컴포넌트 정의
const MyBox = styled.div`
    border: 3px dotted #000;
    background-color: #eee;
    height: 100px;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    color: ${(props) => props.color};

    &:hover{
        transform: scale(1.05, 1.05) rotate(-10deg);
        background-color: ${(props) => props.color};
        color: #fff;
    }
    ${(props) =>
        props.number % 2 === 1 &&
        css`
            font-weight: bold;
            font-style: italic;
            text-decoration: underline;
        `
    }
`


const StyledComponent = () => {
    // 색상이름이나 색상 코드에 대한 배열
    const myColors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink'];

    //배열전체를 100으로 봤을때 하나당 몇%인지 계산
    const myWidth = 100 / myColors.length + '%';
    
    return(
        <div>
            <h2>StyledComponent</h2>
            <h3>단순한 태그처럼 사용</h3>
            <MyGridContainer>
                <MyGridItem width={'30%'}>
                    <MyBox>Item1</MyBox>
                </MyGridItem>
                <MyGridItem width={'10%'}>
                    <MyBox>Item2</MyBox>
                </MyGridItem>
                <MyGridItem width={'20%'}>
                    <MyBox>Item3</MyBox>
                </MyGridItem>
                <MyGridItem width={'15%'}>
                    <MyBox>Item4</MyBox>
                </MyGridItem>
                <MyGridItem width={'25%'}>
                    <MyBox>Item5</MyBox>
                </MyGridItem>
            </MyGridContainer>

            <h3>배열 원소를 활용한 컴포넌트 사용</h3>
            <MyGridContainer>
                {myColors.map((item, index) => {
                    return(
                        <MyGridItem key={index} width={myWidth}>
                            <MyBox color={item} number={index}>
                                {item}
                            </MyBox>
                        </MyGridItem>
                    )
                })}
            </MyGridContainer>

        </div>
    )
};
export default StyledComponent;