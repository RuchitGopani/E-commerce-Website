  
  export function createUser(values) {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8080/Users',{
        method:'POST',
        body: JSON.stringify(values),
        headers: { 'content-type' : 'application/json' },
      });
      const data = await response.json();
      resolve({data});
    }
    );
  }

  export function checkUser(loginInfo) {
    return new Promise(async (resolve,reject) => {
      const email =loginInfo.email;
      const password = loginInfo.password;
      const response = await fetch('http://localhost:8080/Users?email='+email);
      const data = await response.json();

      if(data.length){
        if(data[0].password === password){
          resolve({data:data[0]});
        }
        else{
          reject({message: 'Wrong Credentials.'})
        }
      }
      else{
        reject({message: 'user not found. '})
      }
      
    }
    );
  }