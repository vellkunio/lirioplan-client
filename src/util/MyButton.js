import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export default ({ children, onClick, tip, btnClassName, tipClassName, disabled}) => (
    <Tooltip title={tip} className={tipClassName}>
        <IconButton onClick={onClick} className={btnClassName} disabled={disabled}>
            {children}
        </IconButton>
        

    </Tooltip>
)