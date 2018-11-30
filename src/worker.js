/* eslint-disable no-restricted-globals */

export default () => {
  self.addEventListener("message", e => {
    if (!e) return;

    console.log("E: ", e)

    const users = [];

    const userDetails = {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      id: 1
    };

    for (let i = 0; i < 10000000; i++) {
      userDetails.id = i++;
      userDetails.dateJoined = Date.now();

      users.push(userDetails);
    }

    postMessage(users);
  });
};