// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import { customersData } from './data'; 
// export const Users=()=> {
  

//     return (
//       <div>
//           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {map((data) => (
//               <React.Fragment key={data.CustomerID}>
//                 <ListItem alignItems="flex-start">
//                   <ListItemAvatar>
//                     <Avatar src={data.CustomerImage} />
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary={data.CustomerName}
//                     secondary={
//                       <React.Fragment>
//                         <Typography
//                           sx={{ display: 'inline' }}
//                           component="span"
//                           variant="body2"
//                           color="text.primary"
//                         >
//                           {data.CustomerEmail}
//                         </Typography>
//                       </React.Fragment>
//                     }
//                   />
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//               </React.Fragment>
//             ))}
//           </List>
//       </div>
//     );
//   }
  