import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { Header, Content, Menu} from './components';
import theme from '../theme';


injectGlobal`
  ${normalize()}
`;

injectGlobal`
 @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700,900" rel="stylesheet');
  html{
    box-sizing: border-box;
    height: 100%;
   font-family: 'Nunito', sans-serif;
  }
  
  body{
     height: 100%;
     background: #505661;
  }
  
  *,*:before,*:after{
    box-sizing: inherit;
  }
`;

const App = () =>(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <div>
                <Header>
                    <Menu />
                </Header>
                <Content />
            </div>
        </ThemeProvider>
    </BrowserRouter>
);

export default App;
