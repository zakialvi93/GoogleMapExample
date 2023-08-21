import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import env from 'dotenv';

env.config();

export const apiKey = process.env.API_KEY;
console.log(apiKey);

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);







