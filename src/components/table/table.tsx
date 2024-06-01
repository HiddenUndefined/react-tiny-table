import { CSSProperties } from 'react'
import './table.sass'

export interface TableColumn {
  key: string
  label: string
  colspan?: number
  rowspan?: number
  style?: CSSProperties
}

export interface TinyTableProps {
  bordered?: boolean
  columns: TableColumn[]
  data: any[]
}

export function TinyTable (props: TinyTableProps) {
  const { bordered, columns, data } = props

  return (
    <table className={`${ bordered ? 'bordered' : '' }`}>
      {columns && columns.length && <thead>
        {data && data.length && <tr>
          {columns.map((column, index) => (
            <th key={index} style={column.style} colSpan={column.colspan} rowSpan={column.rowspan}>{column.label}</th>
          ))}
        </tr>}
      </thead>}
      <tbody>
        {data && data.length > 0
          ? data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{row[column.key]}</td>
              ))}
            </tr>
          ))
          : <tr><td colSpan={columns.length}>No data</td></tr>
        }
      </tbody>
    </table>
  )
}
