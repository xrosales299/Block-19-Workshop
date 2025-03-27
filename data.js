
const firstnames = ["John","Smith","Dave","Harry","Amy","Sue","Claire"]
const lastnames = ["Smith","Johnson","Williams","Brown",]
const data = []
const ul = document.querySelector("ul")


//function namegenerator(){ //OLD GENERATOR, KEEP FOR REFERENCE\\
//    const firstrandom = Math.floor(Math.random()*firstnames.length);
//    const lastrandom = Math.floor(Math.random()*lastnames.length);
//    console.log("Your random person is", firstnames[firstrandom], lastnames[lastrandom]);
//    const finalname = [firstnames[firstrandom],  lastnames[lastrandom]];
//    finalname.push
//    ul.innerHTML = finalname.join(" ")
//}

function rendername(){
    const html = data.map((String) => {
        return `<li>${String}</li>`
    })
    console.log(html.join(' '))
    ul.innerHTML = html.join(' ')
}

const i = setInterval(() => {
    const firstrandom = Math.floor(Math.random()*firstnames.length);
    const lastrandom = Math.floor(Math.random()*lastnames.length);
    console.log("Your random person is", firstnames[firstrandom], lastnames[lastrandom]);
    const finalname = [firstnames[firstrandom], lastnames[lastrandom]];
    data.push(finalname)
    rendername()
    if(data.length === 5){
        data.shift()
    }
}, 1000)