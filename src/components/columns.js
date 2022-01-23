import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "First Name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
  },
  {
    Header: "Email",
    accessor: "email",
    Footer: "Email",
  },
  {
    Header: "Age",
    accessor: "age",
    Footer: "Age",
  },
  {
    Header: "Date of Birth",
    accessor: "dob",
    Footer: "Date of Birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone",
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
  },
];
