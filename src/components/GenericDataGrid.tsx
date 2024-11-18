import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

interface GenericDataGridProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  autoHeight?: boolean;
  onRowClick?: (row: any) => void;
}

const GenericDataGrid: React.FC<GenericDataGridProps> = ({
  rows,
  columns,
  autoHeight = true,
  onRowClick,
}) => {
  return (
    <div
      style={{
        height: autoHeight ? "auto" : 400,
        width: "100%",
        marginTop: 20,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight={autoHeight}
        onRowClick={onRowClick}
        checkboxSelection
      />
    </div>
  );
};

export default GenericDataGrid;
