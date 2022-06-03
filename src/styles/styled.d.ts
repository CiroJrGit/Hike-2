import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            text:             string;
            text_hover:       string;
    
            glass_bar:        string;            
            background:       string;
            background_hover: string;

            toggle:           string;
            
            like:             string;
            like_base:        string;
        },
    }
}