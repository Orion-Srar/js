
function wakeup(workDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (workDay) {
                console.log('Work day')
                resolve(true)
            }else {
                console.log('Holiday')
                reject('I am slipping')
            }
        },856)
    })

}

function brushTeeth(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                console.log('I am brushing my teeth')
                resolve('Brushed teeth')
            }else {
                console.log('Holiday')
                reject('I am slipping')
            }
        },325)
    })

}

function breakfast(workDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (workDay) {
                console.log('I am eating')
                resolve('I ate')
            }else {
                console.log('Holiday')
                reject('I am slipping')
            }
        },765)
    })

}

function goToBus(workDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (workDay) {
                console.log('I am going to bus')
                resolve('I am going')
            }else {
                console.log('Holiday')
                reject('I am at home')
            }
        },256)
    })

}

function working(workDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (workDay) {
                console.log('I am working')
                resolve('I am working')
            }else {
                console.log('Holiday')
                reject('I am at home')
            }
        },624)
    })

}

function haveLunch(workDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (workDay) {
                console.log('I have lunch')
                resolve('I ate')
            }else {
                console.log('Holiday')
                reject('I am at home')
            }
        },395)
    })

}

function goToHome(workDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (workDay) {
                console.log('I am coming home')
                resolve('I am coming home')
            }else {
                console.log('Holiday')
                reject('I am at home')
            }
        },356)
    })

}




// wakeup(true)
//     .then(value => {
//         return brushTeeth(value)
//     })
//     .then(value => {
//         console.log(value);
//         return breakfast(true)
//     })
//     .then(value => {
//         console.log(value);
//         return goToBus (true)
//     })
//     .then(value => {
//         return working(true)
//     })
//     .then(value => {
//         return haveLunch(false)
//     })
//     .then(value => {
//         return working(true)
//     })
//     .then(value => {
//         return goToHome(true)
//     })
//
// .catch(reason => {
//     console.warn('upssss',reason);
// })


// async function myDay() {
//     try{
//         await wakeup(true);
//         let newVar = await brushTeeth(true);
//         console.log(newVar);
//         let newVar1 = await breakfast(true);
//         console.log(newVar1);
//         let newVar2 = await goToBus(true);
//         console.log(newVar2);
//         let newVar3 = await working(true);
//         console.log(newVar3);
//         let newVar4 = await haveLunch(true);
//         console.log(newVar4);
//         await goToHome(true);
//
//     }catch (e){
//         console.warn(e);
//
//     }
//
// }
// myDay()

