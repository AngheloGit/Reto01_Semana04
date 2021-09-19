function birtdhay(onSucess) {
return new Promise((resolve, reject)=> {
    setTimeout(() => {
        if(onSucess) {
            resolve("We will have cakes for the birthday party");
        }else {
            reject("We will not have cakes for the birthday party");
       }
    }, 2000)
});
}

birtdhay(false)
    .then((response) => {
        console.log(response);
    })
    .catch((error) =>{
        console.error(error);
    });


