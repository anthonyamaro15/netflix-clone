import axios from 'axios';
import { serverUrl } from '../../../envVariables/index';

export const loginReq = async (values) => {
   const response = await axios.post(`${serverUrl}/api/auth/login`, values);
   return response;
}