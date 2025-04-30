import { Form } from './form'
import { CheckCircle2 } from 'lucide-react';
import { Filter } from './Filter';
import List from './List';

function App() {


  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8 ">
        <header className="my-18 text-center ">
          <div className="flex justify-center items-center mb-2">
            <CheckCircle2 className="text-indigo-600 mr-2" size={32} />
            <h1 className="text-4xl font-bold text-gray-800">TaskMaster</h1>
          </div>
          <p className="text-gray-600">Stay organized and productive</p>
        </header>
        <Form />
        <Filter/>
        <List/>
      </div>
    </>
  )
}

export default App
