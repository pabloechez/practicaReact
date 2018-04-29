import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import { Header, Content} from './components';
import theme from '../theme';


injectGlobal`
  ${normalize()}
`;

injectGlobal`
  html{
    box-sizing: border-box;
    height: 100%;
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
                <Header />
                <Content />
            </div>
        </ThemeProvider>
    </BrowserRouter>
);

export default App;
