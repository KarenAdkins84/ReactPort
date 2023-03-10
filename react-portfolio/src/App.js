import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";


function App() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;
  return (
    <Styles.Wrapper>
      <CSSReset />

      {isMobile ? (
        <MobileNavbar.Wrapper>
        <MobileNavbar.Items>
          <MobileNavbar.Item>Home</MobileNavbar.Item>
          <MobileNavbar.Item>About</MobileNavbar.Item>
          <MobileNavbar.Item>Resume</MobileNavbar.Item>
        </MobileNavbar.Items>
      </MobileNavbar.Wrapper>
      ) : (
      <Navbar.Wrapper>
        <Navbar.Logo>Logo</Navbar.Logo>
        <Navbar.Items>
          <Navbar.Item>Home</Navbar.Item>
          <Navbar.Item>About</Navbar.Item>
          <Navbar.Item>Resume</Navbar.Item>
        </Navbar.Items>
      </Navbar.Wrapper>
      )}
    </Styles.Wrapper>
    
  );
}

const Styles = {
  Wrapper: styled.main`
  display: flex;
  background-color: #eeeeee;
  height: 100vh;
  `,
};

const Navbar = {
  Wrapper: styled.nav`
  flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    `,
  Logo: styled.h1`
  border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
    `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
  `,
};

const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
  position: fixed;
    width: 100vw;
    bottom: 0;

    justify-content: center;
  `,
  Items: styled(Navbar.Items)`
  flex: 1;
    padding: 0 2rem;

    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: 1.2rem;
  `,
};

const CSSReset = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 1.4rem;
  font-family: sans-serif;
}
`;

export default App;
