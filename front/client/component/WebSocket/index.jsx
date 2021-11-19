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
  const {product_info} = useSelector(state=>state.product);
  const socketServer = process.env.NEXT_PUBLIC_SOCKET_URL
  const { sendMessage, lastMessage, lastJsonMessage, readyState } =
    useWebSocket(socketServer);

  useEffect(() => {
    if (lastJsonMessage != null) {
      console.log("JsonMessage", lastJsonMessage); 
      if(lastJsonMessage.product_no==product_info[0].product_no){
        ///// 
      }
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
