function getbin(){
	var bin = document.getElementById("ibin").value;


    let api = 'https://lookup.binlist.net/'+ bin;  
      
    fetch(api)  
         .then(function(response){  
            let data = response.json();  
            return data;
            const {scheme,type,bank,brand,country} = data;


        }) 
.then(function(data){  
	        name = data.scheme
            brand = data.brand;
            bank = data.bank.name;
            cd= data.type;
            country = data.country.alpha2;  
        })  
.then(function(){  
            displayBIN();  
        });  
}  
  
function displayBIN(){ 
  document.getElementById('type').innerHTML = name;
  document.getElementById('brand').innerHTML = brand;
  document.getElementById('bank').innerHTML = bank;
  document.getElementById('cd').innerHTML = cd;
  document.getElementById('country').innerHTML = country;
}
