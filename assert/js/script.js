//var reqURL = "https://jsonplaceholder.typicode.com/posts";
var reqURL = 'https://5f44f2df3fb92f0016754178.mockapi.io/user';

/* GET  Fetchdata */
function getAPI() {
  
  axios
    .get(reqURL)
    .then((resp) => {
      return resp.data;
    })
    .then((data) => {
      let content = '';
      data.forEach((item) => {
        content += `<li id = rowID-${item.id}> ${item.id} - ${item.name} - ${item.email} - 
                <a href="#" onclick = "removeData(${item.id})"> delete </a>
                <a href= "edit.html?id=${item.id}" onclick = "getUser(${item.id})"> edit </a>
                </li>`;
      });
      document.getElementById('target').innerHTML = content;
    })
    .catch((errors) => {
      console.log(errors);
    });
}

// DELETE
function removeData(id) {
  var removeNode = document.getElementById(`rowID-${id}`);
  var removeURL = `${reqURL}/${id}`;
  axios
    .delete(removeURL)
    .then((resp) => {
      alert('Deleted is successfully')
      removeNode.remove();
    })
    .catch((Errors) => console.log(errors));
}

// POST/ INSERT
function addData() {
  
  var user = {
    name: document.getElementById('user').value,
    email: document.getElementById('email').value,
  };

  const options = {
    url: reqURL,
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    data: JSON.stringify(user),
  };

  axios(options)
    .then((data) => {
      alert('successfully insert');
      location.href = 'index.html';
    })
    .catch((errors) => console.log(errors));
}

// PUT/ UPDATE axios update
function updateData(user) {

  const options = {
    url: reqURL + '/' + user.id,
    method: 'PUT',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    data: JSON.stringify(user),  /* here ist Json-String */
  };
 
  axios(options)
  .then((data) => {
    alert('successfully updated');
    location.href = 'index.html';
  })
  .catch((errors) => console.log(errors)); 

  /* C2 */
  /* axios
    .put(reqURL + '/' + user.id, 
    user) // here ist Json-object 
    .then((data) => {
      alert('update erfolgreich');
      location.href = 'index.html';
    })
    .catch((e) => console.log(e)); */

}
