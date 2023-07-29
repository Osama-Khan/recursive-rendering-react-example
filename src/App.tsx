import * as React from "react";
import "./style.css";
import {
  ThemeProvider,
  createTheme,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import categories from "./categories.ts";
import { CategoriesAccordion } from "./components/CategoriesAccordion.tsx";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Stack spacing={3}>
          <Typography variant="h3">Categories</Typography>
          <CategoriesAccordion categories={categories} />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
