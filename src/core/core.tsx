import { TableColumn, TinyTable } from '@components/table'
import './core.sass'

export function Core () {
  const columns: TableColumn[] = [
    {
      key: 'id',
      label: 'ID'
    },
    {
      key: 'type',
      label: 'Type'
    },
    {
      key: 'amount',
      label: 'Amount'
    },
    {
      key: 'date',
      label: 'Date'
    }
  ]
  const fakeData = [
    {
      id: '119-5917-21b',
      type: 'Deposit',
      amount: '$100.00',
      date: '17.05.24 19:49:31'
    },
    {
      id: '119-5917-21b',
      type: 'Deposit',
      amount: '$100.00',
      date: '17.05.24 19:49:31'
    },
    {
      id: '119-5917-21b',
      type: 'Deposit',
      amount: '$100.00',
      date: '17.05.24 19:49:31'
    }
  ]

  return (
    <div className={ 'core-wrapper' }>
      <h1>Tiny Table</h1>
      <TinyTable bordered={ true } columns={ columns } data={ fakeData }/>
    </div>
  )
}

