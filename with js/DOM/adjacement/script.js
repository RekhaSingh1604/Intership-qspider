//beforebegin
const h1=document.createElement('h1')
h1.textContent="Holiday Learning Javascript";

const para=document.createElement('p')
para.textContent="byrekha rajput"


const div = document.getElementById('tag')

div.insertAdjacentElement("beforebegin" ,h1)
div.insertAdjacentElement("beforebegin" ,para )

//afterBegin
/*const p=document.createElement('p')
p.textContent="Holiday Learning Javascript";

const para=document.createElement('p')
para.textContent="byrekha rajput"

const div = document.getElementById('tag')
div.insertAdjacentElement("afterbegin" ,para )*/

//afterend

/*const para1=document.createElement('p');
const para2=document.createElement('p');
para1.textContent="helloworld"
para2.textContent="for Better Experience switch to 1.5x"

const div = document.getElementById('tag')

div.insertAdjacentElement("afterend " ,para2)
div.insertAdjacentElement("afterend " ,para1)
*/

