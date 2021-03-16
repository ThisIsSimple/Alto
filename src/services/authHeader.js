const token = localStorage.getItem('_token');

const authHeader = {
  Authorization: `Bearer ${token}`,
};

export default authHeader;
