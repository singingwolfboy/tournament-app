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
        <tr className="border-b">
          <th>Date</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody>
      {matchResults.map(([date, name], i) => (
        <tr key={i} className="border-b">
          <td className="px-2">{date.toDateString()}</td>
          <td className="px-2">{name}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default RecentWinners;
