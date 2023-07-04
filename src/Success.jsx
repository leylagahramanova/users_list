import React from 'react'; 
import check from './check.png';
import Button from '@mui/material/Button';
export const Success = ({ count }) => {
return (
<div className="successs" style={{background:'#fff'  }}>
<img src={check} alt= "Success" width={80} height={80}></img>
<h3>Success ! </h3>
<p>You send to {count} users</p>
<Button variant="contained"  onClick={()=>window.location.reload()} >Back</Button>
</div>
);
};