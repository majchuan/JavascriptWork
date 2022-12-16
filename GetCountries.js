const https = require("https");

const getCountriesPromise=(s,p)=>{
    const pagePromise = new Promise((resolve, reject) =>{
        https.get("https://jsonmock.hackerrank.com/api/countries/search?name=" + s, (res) =>{
            let data ="";
            res.on("data", (chuck)=>{
                data += chuck;
            });

            res.on("end",()=>{
                const jsonData = JSON.parse(data);
                const page = jsonData.page;
                const totalPages =jsonData.total_pages;
                const countries = jsonData.data;
                const counter = countries.filter(x => x.population > p).length;
                resolve({page, totalPages,counter});
            });
        });
    });

    pagePromise.then((data) =>{
        let page = data.page;
        let totalPages = data.totalPages;
        let counter0 = data.counter; 
        const promises = [];
        if(totalPages > 1){
            for(i = page + 1 ; i < totalPages ; i++){
                const promiseCountry = new Promise((resolve,reject) =>{
                    https.get("https://jsonmock.hackerrank.com/api/countries/search?name=" + s +"&page="+i, (res) =>{
                        let data ="";
                        res.on("data", (chuck)=>{
                            data += chuck;
                        });

                        res.on("end",()=>{
                            const jsonData = JSON.parse(data);
                            const countries = jsonData.data;
                            const counter = countries.filter(x => x.population > p).length;
                            resolve({counter});
                        });
                    });
                });
                promises.push(promiseCountry);
            }

            Promise.all(promises).then((values) =>{
                //console.log(values, counter0);
                let total = 0 ;
                for(let value of values){
                    total+=value.counter;
                }
                //console.log(total+counter0);
                return total+counter0;
            }).then((value)=>{
                console.log(value,1);
            })
        }else{
            console.log(counter0);
            //return counter0;
        }
    });
}


getCountriesPromise("u",1000000);

