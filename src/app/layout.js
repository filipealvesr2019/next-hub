"use client"
import "./globals.css";
import { ConfigProvider } from "../../context/ConfigContext";
import AdminAuthProvider from "../../context/AdminAuthProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

// Exemplo de tema
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <EmotionThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <ChakraProvider>
              <ConfigProvider>
                <AdminAuthProvider>
                  {children}
                </AdminAuthProvider>
              </ConfigProvider>
            </ChakraProvider>
          </MuiThemeProvider>
        </EmotionThemeProvider>
      </body>
    </html>
  );
}
