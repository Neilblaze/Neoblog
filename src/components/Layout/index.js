/**
 * Layout component that queries for data
 * with Gatsby"s useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import {ThemeProvider} from "styled-components"
// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"
// Context
import { ModeContext } from "context/ModeProvider"
// Components
import Header from "components/Header"
// import Social from "components/social/social.js";
// Styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();



const Layout = ({ children }) => {
  const data = useMetaDataQuery();
  const [ darkMode ] = useContext(ModeContext);
  return(
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
    )
  }

export default Layout
