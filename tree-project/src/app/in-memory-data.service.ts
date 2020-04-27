import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NODE_DATA } from "./mock-data";
import { Node } from "./models/node.model";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const nodes:Node[] = NODE_DATA;
    return {nodes};
  }
}