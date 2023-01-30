/*
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => console.log(json))

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      console.log(data.results[0].gender); 
      console.log(data.results[0].name.title + ' '+ data.results[0].name.first + ' '+ data.results[0].name.last); 
      console.log(data.results[0].location.street + ' '+ data.results[0].location.city + ' '+ data.results[0].location.state + ' '+ data.results[0].location.country+ ' ' +data.results[0].location.postcode);
   


    });

    */
/*
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      return json;
    })
    .then(data => {
      //console.log(data.results[0].gender); 
     // console.log(data.results[0].name.title + ' '+ data.results[0].name.first + ' '+ data.results[0].name.last); 
      //console.log(data.results[0].location.street + ' '+ data.results[0].location.city + ' '+ data.results[0].location.state + ' '+ data.results[0].location.country+ ' ' +data.results[0].location.postcode);
      console.log(data.results[0].gender);
console.log(data.results[0].name.title + ' '+ data.results[0].name.first + ' '+ data.results[0].name.last);
console.log(data.results[0].location.street.number + ' '+ data.results[0].location.street.name + ' '+ data.results[0].location.city + ' '+ data.results[0].location.state + ' '+ data.results[0].location.country+ ' ' +data.results[0].location.postcode);
console.log(data.results[0].location.coordinates.latitude + ' '+ data.results[0].location.coordinates.longitude);
console.log(data.results[0].location.timezone.offset + ' '+ data.results[0].location.timezone.description);
console.log(data.results[0].email);
console.log(data.results[0].login.uuid);
console.log(data.results[0].login.username);
console.log(data.results[0].login.password);
console.log(data.results[0].dob.date + ' '+ data.results[0].dob.age);
console.log(data.results[0].registered.date + ' '+ data.results[0].registered.age);
console.log(data.results[0].phone);
console.log(data.results[0].cell);
console.log(data.results[0].id.name + ' '+ data.results[0].id.value);
console.log(data.results[0].picture.large);
console.log(data.results[0].picture.medium);
console.log(data.results[0].picture.thumbnail);
console.log(data.results[0].nat);
console.log(data.info.seed);
console.log(data.info.results);
console.log(data.info.page);
console.log(data.info.version);
    });
    */
/*
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => {
      const {gender, name, location, email, dob, registered, phone, cell, id, picture, nat} = json.results[0];
      const {title, first, last} = name;
      const {street, city, state, country, postcode} = location;
      const {date, age} = dob;
      const {date: regDate, age: regAge} = registered;
      const {name: idName, value: idValue} = id;
      const {large, medium, thumbnail} = picture;
      console.log(gender);
      console.log(title + ' ' + first + ' ' + last);
      console.log(street.name + ' ' + city + ' ' + state + ' ' + country + ' ' + postcode);
      console.log(email);
      console.log(date + ' ' + age);
      console.log(regDate + ' ' + regAge);
      console.log(phone);
      console.log(cell);
      console.log(idName + ' ' + idValue);
      console.log(large);
      console.log(medium);
      console.log(thumbnail);
      console.log(nat);
    });

document.getElementById("nombre").innerHTML = title; */


//Para acceder a una de las constantes que has definido, debes hacerlo después de que la promesa se haya cumplido, es decir, dentro del último .then(). Por ejemplo:
/*
Además de eso, debes asegurarte de que el JavaScript se ejecuta después de que el DOM 
esté cargado, 
para evitar errores, para ello puedes colocar tu código dentro de una función de 
callback de window.onload o utilizar una librería como jQuery para manejarlo.

*/
/*window.onload = function() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => {
        const { gender, name, location, email, dob, registered, phone, cell, id, picture, nat } = json.results[0];
        const { title, first, last } = name;
        const { street, city, state, country, postcode } = location;
        const { date, age } = dob;
        const { date: regDate, age: regAge } = registered;
        const { name: idName, value: idValue } = id;
        const { large, medium, thumbnail } = picture;
        return { title, first, last, email, age, city, state, country, phone, idValue }
    }).then(data => {
        document.getElementById("nombre").innerHTML = `${data.title} ${data.first} ${data.last}`;
        document.getElementById("email").innerHTML = email;
        document.getElementById("telefono").innerHTML = phone;
        document.getElementById("genero").innerHTML = gender;
        document.getElementById("direccion").innerHTML = street + ", " + city + ", " + state + ", " + country + " " + postcode;
        document.getElementById("fecha-nacimiento").innerHTML = date + ", " + age;
        document.getElementById("fecha-registro").innerHTML = regDate + ", " + regAge;
        document.getElementById("id").innerHTML = idName + ": " + idValue;
        document.getElementById("imagen").src = large;
    });
}

*/
/*
fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => {
        const {gender, name, location, email, dob, registered, phone, cell, id, picture, nat} = json.results[0];
        const {title, first, last} = name;
        const {street, city, state, country, postcode} = location;
        const {date, age} = dob;
        const {date: regDate, age: regAge} = registered;
        const {name: idName, value: idValue} = id;
        const {large, medium, thumbnail} = picture;

        document.getElementById("name").innerHTML = `${title} ${first} ${last}`;
        document.getElementById("email").innerHTML = email;
        document.getElementById("telephone").innerHTML = phone;
        document.getElementById("gender").innerHTML = gender;
        document.getElementById("address").innerHTML = `${street}, ${city}, ${state}, ${country} ${postcode}`;
        document.getElementById("birthdate").innerHTML = `${date}, ${age}`;
        document.getElementById("registerdate").innerHTML = `${regDate}, ${regAge}`;
        document.getElementById("id").innerHTML = `${idName}: ${idValue}`;
        document.getElementById("image").src = large;
    });

    */

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => {
      const {gender, name, location, email, dob, registered, phone, cell, id, picture, nat} = json.results[0];
      const {title, first, last} = name;
      const {street, city, state, country, postcode} = location;
      const {date, age} = dob;
      const {date: regDate, age: regAge} = registered;
      const {name: idName, value} = id;
      const {large, medium, thumbnail} = picture;
      
      document.getElementById("name").innerHTML = `${title} ${first} ${last}`;
      document.getElementById("email").innerHTML = email;
      document.getElementById("telephone").innerHTML = phone;
      document.getElementById("gender").innerHTML = gender;
      document.getElementById("address").innerHTML =  city + ", " + state + ", " + country + " " + postcode;
      document.getElementById("birthdate").innerHTML = date + ", " + age;
      document.getElementById("registerdate").innerHTML = regDate + ", " + regAge;
      if (value) {
          document.getElementById("id").innerHTML = idName + ": " + value;
      }
      document.getElementById("image").src = large; 
    });