import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, Paper, Typography } from '@mui/material';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const endOfMessagesRef = useRef(null); // Create a ref for the last message

  useEffect(() => {
    // Scroll to the bottom of the chat window when messages change
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // Dependency array includes messages

  return (
    <Box
      sx={{
        height: '60vh', // Fixed height
        overflowY: 'auto',
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
      }}
    >
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: message.user === 'User' ? 'flex-end' : 'flex-start',
            marginBottom: '0.5rem',
          }}
        >
          <Paper
            sx={{
              padding: '0.5rem 1rem',
              backgroundColor: message.user === 'User' ? '#1976d2' : '#e0e0e0',
              color: message.user === 'User' ? '#ffffff' : '#000000',
              borderRadius: '10px',
              maxWidth: '70%',
            }}
          >
            <Typography variant="body1">{message.text}</Typography>
            <Typography variant="caption" sx={{ display: 'block', textAlign: 'right' }}>
              {message.timestamp}
            </Typography>
          </Paper>
        </Box>
      ))}
      {/* This div is used as a reference for scrolling */}
      <div ref={endOfMessagesRef} />
    </Box>
  );
};

export default ChatWindow;
