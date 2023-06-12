import { createGlobalStyle } from "styled-components";

export const GLobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        
    html, body, #root{
        width: 100%;
        height: 100%;
    }

    body {
        background-color: ${(props) => props.theme["gray-800"]};
        color: ${(props) => props.theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 400 1rem "Lato", sans-serif;
        color: ${(props) => props.theme["white"]};
    }
`;
