import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;

export const sendMessageAndRespond = (message) => (dispatch) => {
  // Dispatch user's message
  dispatch(sendMessage(message));

  // Determine bot response based on the user's message
  let botResponse;
  if (message.text.toLowerCase() === 'hi') {
    botResponse = 'Hello! How can I assist you today?';
  } else if (message.text.toLowerCase() === 'how are you?') {
    botResponse = "I'm just a bot, but I'm here to help!";
  } else {
    botResponse = "I'm not sure how to respond to that, but I'm here to chat!";
  }

  // Simulate receiving a response with a delay
  setTimeout(() => {
    dispatch(
      receiveMessage({
        text: botResponse,
        user: 'Bot',
        timestamp: new Date().toLocaleTimeString(),
      })
    );
  }, 1000);
};

export default chatSlice.reducer;
