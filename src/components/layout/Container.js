import React from 'react';
import styled from 'styled-components'


const ContainerWrapper = styled.div`
    max-width: ${props => props.maxWidth};
    margin: ${props => props.marginTB} auto;
    /* background-color: ${props => props.theme.colorPrimary}; */
    background-color: var(--color-grey-light-1);
    box-shadow: var(--shadow-dark);
    min-height: 50rem;
    @media only screen and (max-width: 900px) {
    margin: 0;
    max-width: 100%;
    width: 100%;
    }
`;

class Container extends React.Component {

    render() {
        return (
            <ContainerWrapper
            marginTB={this.props.marginTB}
            maxWidth={this.props.maxWidth}>
                {this.props.children}
            </ContainerWrapper>
        )
        }
}

export default Container;


