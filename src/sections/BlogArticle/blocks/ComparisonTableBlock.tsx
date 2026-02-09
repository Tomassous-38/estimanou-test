interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
}

export const ComparisonTableBlock = ({ headers, rows }: ComparisonTableProps) => {
  return (
    <div className="my-10 overflow-x-auto rounded-2xl shadow-sm" style={{ border: '1px solid rgba(27, 58, 75, 0.06)' }}>
      <table className="w-full text-sm min-w-[480px]">
        <thead>
          <tr className="bg-navy">
            {headers.map((h, i) => (
              <th key={i} className="px-5 py-3.5 text-left text-white font-medium text-[13px] tracking-wide first:rounded-tl-2xl last:rounded-tr-2xl">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-white" : ""}
              style={i % 2 !== 0 ? { backgroundColor: 'rgba(248, 246, 242, 0.5)' } : undefined}
            >
              {row.map((cell, j) => (
                <td key={j} className={`px-5 py-3.5 font-light ${j === 0 ? "text-navy font-medium" : "text-neutral-500"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
