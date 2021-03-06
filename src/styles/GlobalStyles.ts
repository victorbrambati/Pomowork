import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
      color: var(--tertiary);
      ::selection {
background: --green;
}
  }
  html, body, #root {
      max-height: 100vh;
      max-width: 100vw;
      width: 100%;
      height: 100%;
      background: var(--primary);

  }
   *, button, input {
       border: 0;
       background: none;
       font-family: 'Rubik', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
       
   }
   ::selection {
     color: var(--tertiary);
background: var(--primary);
}
   

   :root {
    --primary: #070417;
    --secondary: #292639;
    --tertiary: #FFFFFF;
    --pink: #FD5B71;
    --pink-background: #3E2B3E;
    --purple: #9B51E0;
    --purple-background: #342A49;
    --orange: #FFA656;
    --orange-background: #3D313A;
    --green: #07E092;
    --green-background: #29333D;
    --gray: #BDBDBD;
    --gray-background: #3F3C4E;
    --gray-dark: #828282;
    --gray-icon: #6A6874;
    --dark-blue: #1B143F;
  }
`;
