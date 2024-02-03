export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;

    const {
      сonnect,
      disconnect,
      sendMessage,
      onOpen,
      onClose,
      onError,
      onMessage,
      connecting,
    } = wsActions;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === сonnect.type) {
        socket = new WebSocket(action.payload);
        dispatch(connecting());
      }
      if (socket) {
        socket.onopen = () => {
          dispatch(onOpen());
        };
        socket.onerror = () => {
          dispatch(onError("Error"));
        };
        socket.onmessage = (e) => {
          const { data } = e;
          const parsedData = JSON.parse(data);
          dispatch(onMessage(parsedData));
        };
        socket.onclose = (event) => {
          dispatch(onClose());
        };
        if (sendMessage && type === sendMessage.type) {
          socket.send(JSON.stringify(action.payload));
        }
        if (disconnect.type === type) {
          socket.close();
          socket = null;
        }
      }
      next(action);
    };
  };
};
