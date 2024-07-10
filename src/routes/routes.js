//requetes api
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("SECRET_KEY", "TVNQUl9DYWZlOmVwc2kyMDIz");

let api_adress = ""

export async function sendConnexion(email, password, setUserUUID) {
  var connexion = JSON.stringify({
    "email": {email},
    "password": {password}
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: connexion,
    redirect: 'follow'
  };

  const res = await fetch(api_adress + "/get_user_uuid", requestOptions)
  .then(response => response.text())
  .then(result => {return JSON.parse(result)})
  .catch(error => console.log('error', error));

  //TODO
  //setUserUUID();
}

export function verifyEmail(verifyURL) {
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  fetch(verifyURL, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));    
}

export async function checkIfExist(email){
  var checkmail = JSON.stringify({
    "email": {email},
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: checkmail,
    redirect: 'follow'
  };

  const res = await fetch(api_adress + "/check_mail_exist", requestOptions)
    .then(response => response.text())
    .then(result => {return JSON.parse(result)})
    .catch(error => console.log('error', error));


  //TODO : Correction bug API qui return le mauvais resultat
  console.log("RESULTAT Ici : ", res)
  if (res.message === "false") {
    console.log("test")
  }
  return false;
}

export function sendInscription(username, email, password){
  var inscription = JSON.stringify({
    "username": {username},
    "email": {email},
    "password": {password}
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: inscription,
    redirect: "follow"
  };

  fetch(api_adress + "/create_user", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}