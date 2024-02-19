import { ActionCreatorWithPayload, ActionCreatorWithoutPayload, Middleware } from "@reduxjs/toolkit";

type TWebSocketActions = {
  connect: ActionCreatorWithPayload<any>;
  disconnect: ActionCreatorWithoutPayload;
  sendMessage?: ActionCreatorWithPayload<string>;
  onOpen: ActionCreatorWithoutPayload;
  onClose: ActionCreatorWithoutPayload;
  onError: ActionCreatorWithPayload<string>;
  onMessage: ActionCreatorWithPayload<string>;
  connecting: ActionCreatorWithoutPayload
}

export const socketMiddleware = (wsActions: TWebSocketActions): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;
    const {
      connect,
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

      if (type === connect.type) {
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
        socket.onclose = () => {
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
