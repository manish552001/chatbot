import React, { useEffect, startTransition } from 'react';
import { useDispatch } from 'react-redux';
import { receiveMessage } from './redux/chatSlice';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import { Container, Typography } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const simulateIncomingMessage = () => {
      startTransition(() => {
        dispatch(receiveMessage({
          text: 'Hello, this is a mock response!',
          user: 'Bot',
          timestamp: new Date().toLocaleTimeString(),
        }));
      });
    };

    const interval = setInterval(simulateIncomingMessage, 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Chat Application
      </Typography>
      {/* ThemeToggle removed */}
      <ChatWindow />
      <MessageInput />
    </Container>
  );
};

export default App;
