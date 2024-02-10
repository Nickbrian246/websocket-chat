import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server, Socket } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  public server: Server;
  constructor(private readonly chatService: ChatService) {}
  handleConnection(client: Socket) {
    console.log(client.id, 'conectado');
  }
  handleDisconnect(client: Socket) {
    console.log(client.id, 'desconectado');
  }
}
