import { Card, CardContent, CardHeader, List, ListItemButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { createAPIEndpoint, ENDPOINTS } from '../api'

export default function Quiz() {
  
  const [qns, setQns] = useState([]);
  const [qnIndex, setQnIndex] = useState(0);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      setTime(prev => prev +1)
    },[1000])
  }
  
  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.question)
      .fetch()
      .then(res => {
        setQns(res.data)
        console.log(res.data);
      })
    .catch(err=>{console.log(err);})
  },[])

  return (
    qns.length !== 0
      ?
      <Card
        sx={{maxWidth: 640, mx: 'auto', mt: 5}}
      >
        <CardHeader title={"Question " + (qnIndex + 1) + " of 5"} />
        <CardContent>
          <Typography variant="h6">
            {qns[qnIndex].qnInWords}
          </Typography>
          <List>
            {qns[qnIndex].options.map((item, idx) =>
              <ListItemButton
                key={idx}
                disableRipple>
                <div>
                  <b>{String.fromCharCode(65 + idx) + " . "}</b>{item}
                </div>

              </ListItemButton>
            )}
          </List>
        </CardContent>
      </Card>
      :null
  )
}
