import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowDropDownRounded, SvgIconComponent } from "@mui/icons-material";

/** Type for category */
type CategoryType = {
  /** Name of the category */
  name: string;
  /** Icon of the category */
  icon?: SvgIconComponent;
  /** Subcategories */
  children?: CategoryType[];
};

/** Prop type for CategoriesAccordion */
type P = {
  categories: CategoryType[];
};

/** Renders category name and icon */
const CategoryDetail = ({ category }: { category: CategoryType }) => {
  const Icon = category.icon;
  return (
    <Stack direction="row" spacing={1}>
      {Icon && <Icon />}
      <Typography>{category.name}</Typography>
    </Stack>
  );
};

/** Recursively renders categories accordion */
export const CategoriesAccordion = ({ categories }: P) => {
  return (
    <Box>
      {categories.map((c) => {
        const hasChildren = c.children && c.children.length > 0;
        return hasChildren ? (
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownRounded />}>
              <CategoryDetail category={c} />
            </AccordionSummary>
            <AccordionDetails>
              <CategoriesAccordion categories={c.children!} />
            </AccordionDetails>
          </Accordion>
        ) : (
          <ListItem disablePadding>
            <ListItemButton>
              <CategoryDetail category={c} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </Box>
  );
};
