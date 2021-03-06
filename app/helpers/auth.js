const auth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve({
        name: 'Tyler McGinnis',
        avatar: 'https://pbs.twimg.com/profile_images/378800000605536525/891a881bde93a1fc3e289528fb859b96_400x400.jpeg',
        uid: 'tylermcginnis'
      })
    }, 2000)
  })
}

export default auth
