// Task 2: listUsers()

// function listUsers(){
//     method: "POST"


// }

// fetch("http://localhost:3000", {
//         .then(response => response.json())
//         .then(data => {

//         document.getElement('p').textContent = JSON.stringify(data);
//     })

// })


export function listUsers() {
    let serverURL = "http://localhost:3000";
    fetch(serverURL + "/users").then(response => response.json())
    .then(data => console.log(data));
}


// }
//   module.exports = { getServerURL };



//* pytest test.py