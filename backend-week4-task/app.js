// const fetch = require('node-fetch');

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(json => {
//         console.log("Name of the first user in the array:");
//         console.log(json[0].name);
// })


const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', res => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    const users = JSON.parse(Buffer.concat(data).toString());
    console.log("The Name of the users are:");
    for(user of users) {
     
      console.log(`${user.name}`);
    }
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});