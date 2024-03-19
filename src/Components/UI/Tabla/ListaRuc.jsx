import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ListaRuc = ({ listaRuc }) => {
  const [rowPerPage, setRowsPerPage] = useState(7);
  const [page, setPage] = useState(0);

  const RUC_HEAD = [
    {
      id: "ruc",
      numeric: false,
      label: "RUC",
      align: "right",
    },
    {
      id: "nombre",
      numeric: false,
      label: "Nombre",
      align: "right",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {listaRuc.length > 0 && Array.isArray(listaRuc) && (
        <Paper>
          <TableContainer sx={{ width: "auto" }}>
            <Table
              sx={{ minWidth: 550, width: "100%" }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <TableHead>
                <TableRow>
                  {RUC_HEAD.map((item) => (
                    <TableCell
                      sx={{ backgroundColor: "#e7f3fd" }}
                      key={item.id}
                      padding="normal"
                    >
                      <p className="grid-head">{item.label}</p>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {listaRuc
                  .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                  .map((item) => (
                    <TableRow
                      key={item.ruc}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ cursor: "pointer", overflow: "hidden" }}
                    >
                      <TableCell width={150}>
                        <p className="grid-text">{item.ruc}</p>
                      </TableCell>
                      <TableCell width={300}>
                        <p className="grid-text">{item.nombre}</p>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={listaRuc.length}
            page={page}
            rowsPerPageOptions={[7, 10]}
            onPageChange={handleChangePage}
            rowsPerPage={rowPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
      {(!Array.isArray(listaRuc) || listaRuc.length === 0) && (
        <ErrorMessage message="No hay ningun ruc encontrado con este parametro" />
      )}
    </>
  );
};

export default ListaRuc;
