import React from 'react';
import './App.css';
import { Users } from './Users';
import { Success } from './Success';
import { customersData } from './data';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const [invites, setInvites] = React.useState([]);
  
  React.useEffect(() => {
    // Simulating asynchronous behavior with setTimeout
    setTimeout(() => {
      setUsers(customersData);
      setIsLoading(false);
    }, 2000); // Delay of 2 seconds
  }, []);
  
  const onClickInvite = (CustomerID) => {
    if (invites.includes(CustomerID)) {
      setInvites(prev => prev.filter((_CustomerID) => _CustomerID !== CustomerID));
    } else {
      setInvites(prev => [...prev, CustomerID]);
    }
  };
  const onClickSendInvites=()=>{
    setSuccess(true);
  }
  return (
    <div className="App">
      {success ? (<Success count={invites.length} />):(
      <Users items={users} 
      isLoading={isLoading} 
      invites={invites} 
      onClickInvite={onClickInvite} 
      onClickSendInvites={onClickSendInvites}/>)}
    </div>
  );
}

export default App;
