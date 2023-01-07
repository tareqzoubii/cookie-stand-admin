import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { timeSlots, sales } from "./data";
export default function ReportTable({ report }) {
  let count = 0
  return (
    <div>
      <Table bordered hover >
        <thead className="bg-green-900 py-2 px-10 rounded-md text-white font-bold dark:text-white">
          <tr >
            <th >Location</th>
            {timeSlots.map((slot) => {
              return <th>{slot}</th>;
            })}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {report.length > 0 &&
            report.map(({ location }, index) => {
                let total = 0
                count = count + 1
                if (count > 6){
                    count = 0
                }
              return (
                <tr className="dark:text-white">
                  <td>{location}</td>
                  {sales[count].map((hour) => {
                    total = total + hour
                    return <td>{hour}</td>;
                  })}
                <td>{total} </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}











