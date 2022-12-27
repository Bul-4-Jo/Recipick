async function getUser(token, accountname) {
  try {
    const data = await fetch(`/profile/${accountname}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const result = await data.json();

    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default getUser;
