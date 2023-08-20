import {faker} from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{
  name: string;
  location:{
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor(){
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }

  markerContent(): string {
    return `
    <div>
    <h1>User Name: ${this.name}</h1>
    </div>
    `; 
  }
}