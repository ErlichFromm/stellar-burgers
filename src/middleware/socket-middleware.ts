import { Middleware, UnknownAction } from "redux";

type WsActionTypes = {
  wsInit: string;
  wsClose: string;
  wsSendMessage?: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
};

export interface ActionTemplate {
  type: string;
  payload: any;
}

export type TActionSelfCopy = <T extends UnknownAction>(
  action: T,
  ...extraArgs: any[]
) => T;

export const checkActionObject = (data: unknown): data is ActionTemplate => {
  return (
    typeof data === "object" &&
    data instanceof Object &&
    "payload" in data &&
    "type" in data &&
    typeof data.type === "string"
  );
};

const convertErrorResponseToString = (err: unknown) =>
    err instanceof Object && "message" in err && typeof err.message === "string"
      ? err.message
      : err?.toString() || "unknown message";

export const socketMiddleware = (
  wsActions: WsActionTypes
): Middleware<{}, unknown, TActionSelfCopy> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      
      // Проверка
      console.log(action);

      if (!checkActionObject(action)) return;

      // Проверка
      console.log(action);

      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsClose,
        wsSendMessage,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;
      
      if (!payload) return;
      if (type === wsInit) {
        socket = new WebSocket(payload);
        socket.onopen = () => {
          dispatch({ type: onOpen });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: convertErrorResponseToString(event) });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({
            type: onMessage,
            payload: {
              data: parsedData,
              timestamp: new Date().getTime() / 100,
            },
          });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }

      if (wsClose && type === wsClose && socket) {
        socket.close();
      }

      if (wsSendMessage && type === wsSendMessage && socket) {
        socket.send(JSON.stringify(payload));
      }

      next(action);
    };
  };
};



