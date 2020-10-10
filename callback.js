const peopleAPI = (username, password, callback) => {
  // things are done
  setTimeout(() => {
    return callback({ success: true, data: username })
  }, 2000)
}

const dogAPI = (username, dogName, callback) => {
  setTimeout(() => {
    return callback({ success: true, data: `${username} says that ${dogName} is the best.` })
  }, 1000)
}

const facts = () => {
  const peeps = peopleAPI("Abhishek", "not my password", (response) => {
    dogAPI(response.data, "Cooper", (res) => {
      console.log(res.data)
    })
  });
}

facts()