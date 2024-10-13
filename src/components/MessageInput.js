import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessageAndRespond } from '../redux/chatSlice';
import { TextField, Button, Box } from '@mui/material';

const MessageInput = () => {
  const [messageText, setMessageText] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (!messageText.trim()) return;

    const message = {
      text: messageText,
      user: 'User',
      timestamp: new Date().toLocaleTimeString(),
    };

    dispatch(sendMessageAndRespond(message));
    setMessageText('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
      <TextField
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onKeyPress={handleKeyPress} // Add key press event handler
        placeholder="Type a message..."
        fullWidth
        variant="outlined"
      />
      <Button onClick={handleSendMessage} variant="contained" color="primary">
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
