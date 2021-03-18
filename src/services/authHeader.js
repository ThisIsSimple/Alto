const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem('_token')}`,
});

export default authHeader;
