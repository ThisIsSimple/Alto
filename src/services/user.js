import { getWithAuth } from '.';

const getAllUsers = () => getWithAuth('users/');

export default { getAllUsers };
