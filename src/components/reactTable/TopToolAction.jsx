import {
    Box,
    Button,
  } from "@mui/material";
  import AddIcon from "@mui/icons-material/Add";

export default function TopToolAction({table, title}) {
  return (
    <Box>
      <Button
        onClick={() => {
          table.setCreatingRow(true);
        }}
        startIcon={<AddIcon />}
        color="warning"
      >
        Insertar {title}
      </Button>
    </Box>
  );
}
