import { useTable, useGlobalFilter, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { useMemo } from "react";
import "./table.css";
import Layout from "./Layout";
import styled from "styled-components";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
    <Layout filter={globalFilter} setFilter={setGlobalFilter}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <ButtonBox>
        <p>
          Page {pageIndex + 1} of {pageOptions.length}
        </p>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <AiOutlineCaretLeft />
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <AiOutlineCaretRight />
        </button>
      </ButtonBox>
    </Layout>
  );
};

export default PaginationTable;

const ButtonBox = styled.div`
  background-image: linear-gradient(to right, #4c4c52, #9c9ca5);
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-weight: 700;
    color: #eeee;
    margin-right: 2rem;
  }

  button {
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    border: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2e2e36;
    color: #c9c9d1;
    cursor: pointer;
    transition: all 0.2s ease;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:active {
      transform: scale(0.95) translateY(-2px);
    }
  }
`;
