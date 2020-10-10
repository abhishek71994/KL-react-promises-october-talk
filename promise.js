const peopleAPI = (username, password, callback) => new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve({ success: true, data: username })
  }, 2000)
})


const facts = async () => {
  const prom = await peopleAPI("Abhishek", "not my password")
  console.log(prom);
}

facts()