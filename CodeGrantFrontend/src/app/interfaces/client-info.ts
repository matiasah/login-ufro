import { Client } from './client';
import { Principal } from './principal';

export interface ClientInfo {
    authRequest: any;
    client: Client;
    principal: Principal;
}
