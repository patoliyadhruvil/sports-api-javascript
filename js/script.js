const url = 'https://sportscore1.p.rapidapi.com/sports';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a88dc32052msh00dd3e7357558e8p1e7f73jsn4a2f4730fd14',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};
var select = document.getElementById('select');
var pri = document.getElementById('pri');

var Data = () =>{
    fetch(url , options).then((res)=>res.json())
    .then((result)=>{
        console.log(result);
        result.data.forEach(ele => {
            console.log(ele.name);
            select.innerHTML += `<option value="${ele.slug}">${ele.slug}</option>`
        });
    }).catch((err)=>{
        console.log(err);
    })
}
Data(); 

var fun = () =>{
    var k = select.value;
    console.log(k);
    
    fetch(url , options).then((res)=>res.json())
    .then((result)=>{
        result.data.forEach(ele => {
            if(ele.slug == k){
                for (const key in ele.name_translations) {
                        pri.innerHTML += `<h1>${key} == ${ele.name_translations[key]}</h1>`
                }
            }
        });
    }).catch((err)=>{
        console.log(err);
    })

}
