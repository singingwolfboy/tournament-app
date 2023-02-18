import * as React from "react";

interface Props {
  matchResults: [Date, string][];
}

const RecentWinners: React.FC<Props> = ({ matchResults }) => {
  if (!matchResults) {
    return <p>No data</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Winner</th>
        </tr>
      </thead>
      {matchResults.map(([date, name], i) => (
        <tr key={i}>
          <td>{date.toDateString()}</td>
          <td>{name}</td>
        </tr>
      ))}
    </table>
  );
};

export default RecentWinners;
