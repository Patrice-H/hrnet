import { useAppSelector } from '../../utils/hooks';
import { applyUserOptions } from '../../utils/functions';
import SortButton from '../table-components/SortButton';
import './EmployeeTable.css';

const EmployeeTable = () => {
  const employeesList = useAppSelector((state) => state.employees.list);
  const entries = useAppSelector((state) => state.displayOptions.tableLength);
  const pageNumber = useAppSelector((state) => state.displayOptions.pageNumber);
  const sortedBy = useAppSelector((state) => state.displayOptions.sortBy);
  const orderedBy = useAppSelector((state) => state.displayOptions.orderBy);
  // prettier-ignore
  const filtredBy = useAppSelector((state) => state.displayOptions.searchFilter);

  const displayedList = applyUserOptions(
    employeesList,
    filtredBy,
    sortedBy,
    orderedBy
  );
  const startIndex = entries * (pageNumber - 1);
  const employees = displayedList.splice(startIndex, entries);

  const tableHeaders = [
    'First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
  ];

  const formatId = (value) => {
    const regex = / /g;
    return value.replace(regex, '-').toLowerCase();
  };

  return (
    <div id="employees-table" data-testid="employees-table">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={formatId(header)}>
                <div className="th">
                  <span>{header}</span>
                  <SortButton elementType={formatId(header)} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr className="darkline">
              <td colSpan={9} id="no-data">
                No data available in table
              </td>
            </tr>
          ) : (
            employees.map((employee, index) => (
              <tr
                key={`${employee.lastName}-${index}`}
                className={index % 2 === 0 ? 'darkline' : null}
              >
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;