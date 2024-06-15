
const RECONNECT_PERIOD = 3000;

type TwsActionsTypes = {
    wsInit: string;
    wsClose: string;
    wsSendMessage?: string;
    onOpen: string;
    onClose: string;
    onError: string;
    onMessage: string;
  };

export const socketMiddlewareWithReconnect = (
  wsActions: TwsActionsTypes,
  withTockenRefresh = false
): Middleware => {
  return (store) => {
    const { wsConnect, wsDisconnect, onOpen, onClose, onError, onMessage } =
      wsActions;
    let socket: WebSocket | null = null;
    let isConnected = false;
    let reconnectTimer = 0;
    let url = "";

    return (next) => (action) => {
      const { dispatch } = store;
      // const { type, payload } = action;

      if (wsConnect.match(action)) {
        url = action.payload;
        socket = new WebSocket(url);
        isConnected = true;
        if (socket) {
          socket.onopen = () => {
            dispatch(onOpen());
          };

          socket.onerror = (event) => {
            dispatch(onError(String(event)));
          };

          socket.onmessage = (event) => {
            const { data } = event;

            const parsedData = JSON.parse(data);

          if (isConnected) {
            reconnectTimer = window.setTimeout(() => {
              dispatch(wsConnect(url));
            }, RECONNECT_PERIOD);
          }
        }
      }

      if (wsDisconnect.match(action) && socket) {
        clearTimeout(reconnectTimer);
        isConnected = false;
        reconnectTimer = 0;
        socket.close(1000);
        dispatch(onClose("1000"));
      }

      next(action);
    };
  };
};