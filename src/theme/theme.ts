import { createTheme } from "@mui/material/styles";

const themeConstants = {
  paper: "#F9F9F9",
  primary: {
    main: "#000",
    dark: "#979797",
  },
  secondary: {
    main: "#212121",
    dark: "#3A3A3A",
  },
  error: {
    main: "#b22222",
    dark: "#8b0000",
  },
  fg: {
    main: "#000",
    dark: "#6D6D6D",
  },
  breakpoints: {
    xs: 0,
    mb: 350,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

const theme = createTheme({
  palette: {
    primary: themeConstants.primary,
    secondary: themeConstants.secondary,
    background: { paper: themeConstants.paper },
    text: {
      primary: themeConstants.fg.main,
      secondary: themeConstants.fg.dark,
    },
    error: themeConstants.error,
  },
  breakpoints: {
    values: themeConstants.breakpoints,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: themeConstants.fg.main,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: themeConstants.secondary.main,
            },
            "&:hover fieldset": {
              borderColor: themeConstants.primary.main,
            },
            "&.Mui-focused fieldset": {
              borderColor: themeConstants.primary.main,
            },
          },
          "& .MuiInputLabel-root": {
            color: themeConstants.fg.dark,
          },
        },
      },
    },
  },
});

export { theme };
