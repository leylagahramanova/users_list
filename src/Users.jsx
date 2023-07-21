import React, { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import plus from './plus.png';
import minus from './minus.png';
import { customersData } from './data'; // Assuming customersData is imported
import Input from "./Input"
export const Users = ({ onClickInvite, invites, isLoading, onClickSendInvites }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const [users] = React.useState([]);
  const [messages, setMessages]=useState([]);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredCustomers = customersData.filter((customer) =>
    customer.CustomerName.toLowerCase().includes(searchValue.toLowerCase())
  );
  const onSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: message,
        user: users,
      },
    ]);
    this.setState({messages: messages})
  }

  return (
    <div className="container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Find user"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <span className="search-icon">
          {/* Add your search icon here */}
        </span>
      </div>
      {isLoading ? (
        <div className="skeleton-list" style={{ width: '100%' }}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <br />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <br />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
        </div>
      ) : (
        <List sx={{ maxWidth: '100%', bgcolor: 'background.paper' }} style={{ background: '#ebebe0' }}>
          <div className='list'>
            {filteredCustomers.map((customer) => (
              <React.Fragment key={customer.CustomerID}>
                <ListItem alignItems="flex-start" isinvited={invites.includes(customer.CustomerID) ? 'true' : 'false'}>
                  <ListItemAvatar>
                    <Avatar src={customer.CustomerImage} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={customer.CustomerName}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {customer.CustomerEmail}
                        </Typography>
                        <br />
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.secondary"
                        >
                          {customer.ProjectName} - {customer.Status}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <img
                    className='action'
                    onClick={() => onClickInvite(customer.CustomerID)}
                    src={invites.includes(customer.CustomerID) ? minus : plus}
                    alt="Action"
                    width={40}
                    height={40}
                    style={{ justifyContent: "center" }}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </div>
        </List>
      )}
             <Input
        onSendMessage={onSendMessage}
      />
      {invites.length>0 && (<Button variant="contained"  onClick={onClickSendInvites}>Send event</Button>)}
   
    </div>
  );
};
