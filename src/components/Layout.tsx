import Head from "next/head";
import styled from "styled-components";

// import Footer from "./Footer";
// import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>$urveyfi</title>
        <meta name="description" content="Answer & Earn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        {/* <Header /> */}
        <Main>{children}</Main>
        {/* <Footer /> */}
      </LayoutContainer>
    </>
  );
};

export default Layout;

/*
Styles
*/

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
