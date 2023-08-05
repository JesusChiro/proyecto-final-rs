import { URL_API_STORE } from '../constants'
export const postLogin = async (objeto) => {
  const response = await fetch(`${URL_API_STORE}/api/usuario/login`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(objeto) })
    

  return response.json();
};
