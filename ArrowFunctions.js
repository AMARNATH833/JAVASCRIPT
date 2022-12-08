function a(b){
    console.log(b);
    return b;
}
a(50);

const as=async(a,b)=>{
    // await  fetch('http://localhost:5500').then((ev)=>{
    //     console.log(ev);
    // })
    // console.log(a);
    return {a,b}
}
console.log("end");