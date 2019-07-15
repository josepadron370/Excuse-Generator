// let who = ['the dog ','my grandma ','his turtle ','my bird '];
// let what = ['eat ','pissed ','crushed ','broke '];
// let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
// let sentence = who[1] + what[1] + when[1];
// document.body.querySelector("#sentence").innerHTML=sentence;


    //     let x = ["My dog ","Your grandma ", "His mother ", "Her uncle "]
    //     let y = ["ate ","tore up ","burned ", "threw away " ]
    //     let z = ["my homework. ","my car. ","my bus pass. ","my bicycle. "]
    //     let finalWord =[];
    //     for(t = 0; t < x.length; t++ ){
    //                 for(r = 0; r < y.length; r++ ){
    //                 for( e= 0; e < z.length; e++ ){
    //         finalWord.push(x[t]+y[r]+z[e]);
    //     }
    //     }
    //     }
    // document.getElementById("sentence").innerHTML = finalWord;


// let x = ["My dog ","Your grandma ", "His mother ", "Her uncle "]
// let y = ["ate ","tore up ","burned ", "threw away " ]
// let z = ["my homework. ","my car. ","my bus pass. ","my bicycle. "]

function excuseGenerator() {
    let noun = ["My dog ", "A crackie ", "My crazy uncle "];
    let verb=["ate ", "burned ", "stole ", "killed ", "destroyed ", "broke "];
    let avoid =["my homework", "my final project", "my car"];
    let time = [" yesterday.", " last Wednesday."];

    let randomExcuseNoun = noun[Math.floor(noun.length * Math.random())];
    let randomVerb = verb[Math.floor(verb.length * Math.random())];
    let randomAvoid = avoid[Math.floor(avoid.length * Math.random())];
    let randomTime = time[Math.floor(time.length * Math.random())];

    let sentence = randomExcuseNoun + randomVerb + randomAvoid + randomTime;

    document.getElementById("sentence").innerHTML = sentence;
    console.log("noun");
 }

//  console.log("asdfasdf");
//  document.querySelector('#sentence').innerHTML = "tge sebtece";