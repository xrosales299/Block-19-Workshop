
const firstnames = ["John","Smith","Dave","Harry","Amy","Sue","Claire"]
const lastnames = ["Smith","Johnson","Williams","Brown",]
const firstnameoutput = firstnames[Math.random()*firstnames.length | 0]
const lastnameoutput = lastnames[Math.random()*lastnames.length | 0]
const ul = document.querySelector("ul")

function render(){
    const html = firstnames.map((string) => {
        return `<li>${string}</li>`
    })
    console.log(html.join(""))
    ul.innerHTML = html.join("")
}


function namegenerator(){
    const firstrandom = Math.floor(Math.random()*firstnames.length);
    //const lastrandom = Math.floor(Math.random()*lastnames.length);
    //ul.innerHTML = html.join(firstnames[firstrandom], lastnames[lastrandom]);
    console.log("Your random person is", firstnames[firstrandom]);
}



setInterval(() => {
    const 
    namegenerator()
    render()
}, 1000)