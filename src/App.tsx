import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useCounter } from './hooks/useCounter/useCounter';
import { useFetch } from './hooks/useFetch/useFetch';
import { DataResult } from './interfaces/interfaces';

const initialValues = {
  initialValues: {
    count: 5,
    maxCount: 25,
  },
};

function App() {
  const { counter, manageValueBy, reset, maxCount, isMaxCountReached } =
    useCounter(initialValues);

  const { data, isLoading, error } = useFetch<DataResult[]>(
    'https://jsonplaceholder.typicode.com/users'
  );

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => manageValueBy(-1)}>count is {counter}</button>

        <button onClick={reset}>Reset</button>
        <p>
          {maxCount} <code> {JSON.stringify(isMaxCountReached)} </code>
        </p>

        {data?.map((el) => (
          <h3 key={el.id}> {el.name} </h3>
        ))}
      </div>
    </div>
  );
}

export default App;
