import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useSelector, useDispatch } from "react-redux";


const WebSocket = ({ children }) => {
  const dispatch = useDispatch();
  const socketServer = process.env.NEXT_PUBLIC_SOCKET_URL
  const { sendMessage, lastMessage, lastJsonMessage, readyState } =
    useWebSocket(socketServer);

  useEffect(() => {
    if (lastJsonMessage != null) {
      console.log("JsonMessage", lastJsonMessage); 
      


    }
  }, [lastJsonMessage]);

  // useMemo(() => {

  // }, [lastJsonMessage]);

  //   const connectionStatus = {
  //     [ReadyState.CONNECTING]: "Connecting",
  //     [ReadyState.OPEN]: "Open",
  //     [ReadyState.CLOSING]: "Closing",
  //     [ReadyState.CLOSED]: "Closed",
  //     [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  //   }[readyState];

  return <>{children}</>;
};

export default WebSocket;
