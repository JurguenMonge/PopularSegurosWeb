import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { MRT_EditActionButtons } from "material-react-table";

export default function DialogBase({
  table,
  row,
  internalEditComponents,
  title,
}) {
  return (
    <>
      <DialogTitle
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "gray",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        {internalEditComponents}
      </DialogContent>
      <DialogActions>
        <MRT_EditActionButtons
          variant="contained"
          table={table}
          row={row}
          sx={{
            "& .MuiButton-root": {
              backgroundColor: "#f5831f", 
              color: "#fff",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#fc4b08",
              },
            },
            "& .MuiButton-root.MuiButton-text": {
              backgroundColor: "#b0b0b0", 
              color: "#fff",
              borderRadius: "8px", 
              "&:hover": {
                backgroundColor: "#808080", 
              },
            },
          }}
        />
      </DialogActions>
    </>
  );
}
