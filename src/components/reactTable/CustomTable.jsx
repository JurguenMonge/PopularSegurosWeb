import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import useTableTheme from "../../utils/TableTheme";
import { ThemeProvider } from "@mui/material";
import RowAction from "./RowAction";
import TopToolAction from "./TopToolAction";
import DialogBase from "../dialog/DialogBase";

export default function CustomTable({
  columns,
  data,
  role,
  title,
  handleDelete,
  handleEdit,
  handleSave,
}) {
  const tableTheme = useTableTheme();
  const memoizedColumns = useMemo(() => columns, [columns]);

  return (
    <ThemeProvider theme={tableTheme}>
      <MaterialReactTable
        columns={memoizedColumns}
        data={data}
        enableFullScreenToggle={true}
        enableDensityToggle={true}
        localization={MRT_Localization_ES}
        enableRowActions
        positionActionsColumn="last"
        enableColumnFilterModes={true}
        columnFilterDisplayMode={"popover"}
        muiSkeletonProps={{ animation: "pulse", height: 28 }}
        onCreatingRowSave={handleSave}
        onEditingRowSave={handleEdit}
        renderCreateRowDialogContent={({
          table,
          row,
          internalEditComponents,
        }) => (
          <DialogBase
            table={table}
            row={row}
            internalEditComponents={internalEditComponents}
            title={`Crear ${title}`}
          />
        )}
        renderEditRowDialogContent={({
          table,
          row,
          internalEditComponents,
        }) => (
          <DialogBase
            table={table}
            row={row}
            internalEditComponents={internalEditComponents}
            title={`Editar ${title}`}
          />
        )}
        renderRowActionMenuItems={({ row, table, closeMenu }) => [
          <RowAction
            key={`row-action-${row.id}`}
            row={row}
            table={table}
            role={role}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            closeMenu={closeMenu}
          />,
        ]}
        renderTopToolbarCustomActions={({ table }) => (
          <TopToolAction table={table} title={title}/>
        )}
      />
    </ThemeProvider>
  );
}
