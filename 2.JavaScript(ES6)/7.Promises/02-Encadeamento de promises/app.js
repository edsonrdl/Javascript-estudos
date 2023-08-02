    const currency = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ currency: 'euro', value: 3.50 });
        },2000);
    });

    const countries = new Promise((resolve, reject) => {
        resolve(['Ireland', 'England', 'Scotland']);
    });

    Promise
        .all([currency, countries])
        .then(responses => {
            console.log(responses);
        })

    // Promise
    //     .race([currency, countries])
    //     .then(responses => {
    //         console.log(responses);
           
    //     })

//Promisse.All() exibe todo o array
//Promisse.race() retorna o valor da primeia promesa se for verdadeira 