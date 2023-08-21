import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import env from 'dotenv';

env.config();

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

export const apiKey = process.env.API_KEY;
console.log(apiKey);

customMap.addMarker(user);
customMap.addMarker(company);







