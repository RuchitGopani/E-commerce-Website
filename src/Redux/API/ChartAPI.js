export function createChart(values) {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8080/Charts',{
        method:'POST',
        body: JSON.stringify(values),
        headers: { 'content-type' : 'application/json' },
      });
      const data = await response.json();
      resolve({data});
    }
    );
  }

  export function getChart(uid) {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8080/Charts/?UserId='+uid);
      const data = await response.json();
      resolve({data});
    }
    );
  }