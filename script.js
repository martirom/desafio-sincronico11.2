const btn = document.getElementById("btn-enviar");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("last-name")
const birthdate = document.getElementById("dateofbirth")

btn.addEventListener("click", event => {
    event.preventDefault;

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        first_name: firstname.value,
        last_name: lastname.value,
        birthdate: birthdate.value,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response => {
        if (response.ok){
            return response.json();
        }
        throw new Error("Fallo al enviar los datos")
    })
    .then((json) => {
        console.log(JSON.stringify(json));
    })
    .catch((error) => {
        console.log(error)
    })
});

