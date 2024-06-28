import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
@WebSocketGateway(3001)
export class GateWay implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket, message: any) {
    this.server.emit('headers', {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    });

    this.server.emit('user-join', {
      message: `user join  ${client.id}`,
    });

    client.emit('answer', {
      message: 'kekekekke',
    });
  }

  handleDisconnect(client: any) {
    this.server.emit('user-leave', {
      message: `user ${client.id} leave`,
    });
  }

  @SubscribeMessage('call')
  acceptCall(client: Socket, message: any) {
    console.log(message);

    client.emit('take', { admin: message, status: 'call Accepted' });
  }
}
