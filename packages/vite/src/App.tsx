import { Connect } from '@/components/Connect'
import { TransactionTesting } from '@/components/TransactionTesting'

function App() {
  return (
    <>
        <div className='absolute top-2 right-2'>
          <Connect />
        </div>
        <TransactionTesting />
    </>
  )
}

export default App
