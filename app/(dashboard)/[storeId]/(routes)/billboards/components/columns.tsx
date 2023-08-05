"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action";
 

export type BillboardColumn = {
  id: string;
  label: number;
  createdAt: string;
}
 
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  }
]