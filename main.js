fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => getdata.innerHTML = data.map((item, i) => {
    return (`
    <tr>
    <td>${i+1}</td>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.website}</td>
    <td>
    <button class="btn btn-primary btn-sm">Edit</button>
    <button class="btn btn-danger"> Delete</button>
    </td>
    
    </tr>
    `)

  }).join('')
  )
let getdata = document.getElementById('user-content')
