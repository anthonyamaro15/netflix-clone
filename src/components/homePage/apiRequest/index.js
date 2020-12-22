import axios from 'axios';
import { serverUrl } from '../../../envVariables';

export const loginReq = async (values) => {
   const response = await axios.post(`${serverUrl}/api/auth/login`, values);
   return response;
}

export const signupRequest = async (values) => {
   return await axios.post(`${serverUrl}/api/auth/register`,values);
}
