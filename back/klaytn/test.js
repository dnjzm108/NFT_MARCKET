const test = () =>{

    let v = "11"
    let x = "11"
    console.log(typeof(v*x));
    console.log(typeof(Number(v)*Number(x)));
    console.log(typeof(`${Number(v)*Number(x)}`));
}

test()