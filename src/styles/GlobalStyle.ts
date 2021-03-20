import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  :root {
    --main: #6c757d;
    --main-hover: #5a6268;
    --primary: #6c757d;
    --primary-hover: #5a6268;
    --warning: #f4d83c;
    --warning-hover: #f6e987;
    --danger: #dc3545;
    --danger-hover: #c82333;
    --success: #28a745;
    --success-hover: #218838;

    --white: #ffffff;
    --black: #000000;
    --grey: #f0f0f0;
    
  }
  .container {
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    @media (max-width: 992px) {
      max-width: 960px;
    }
    @media (max-width: 768px) {
      max-width: 720px;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
  }
`