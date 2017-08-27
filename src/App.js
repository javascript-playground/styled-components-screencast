import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { keyframes, css } from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`

const LogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const spinAnimation = () => css`animation: ${LogoSpin} infinite ${props => props.time || 20}s linear;`;

const Logo = styled.img.attrs({
  alt: 'logo',
  src: logo,
})`
  ${spinAnimation()}
  height: 80px;
`

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;

  > h2 { color: red; }
`

const Intro = styled.p`
  font-size: large;
`


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo time={2} />
          <Logo time={20} />
          <h2>Welcome to React</h2>
          <p>sub header here</p>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}

export default App;
