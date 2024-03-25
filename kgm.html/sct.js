 import {useState} from "react";

function Authenticate(){
const [data,setData]=useState({
  name:"",
  email:"",
  pass:""
})
const [registered, setRegistered] = useState(false);
const [newdata,setNewData]=useState([]);
const[login,setLogin]=useState({
  emailid:"",
  password:""
})
const [da,setda]=useState([])
console.log(da)

const handleSave=(e)=>{
  const { name, value } = e.target;
      setData( {...data, [name]: value} );
      console.log(data)
}
const handleSubmit=(e)=>{
  e.preventDefault();
  if (data.name && data.pass && data.email) {
    setNewData(prevnewData => [...prevnewData, data]);
    setData({ name: "", email: "",pass:"" });
    setRegistered(true);
    
    alert('Registration successful!');
  } else {
    alert("Please fill all the fields");
  }
  console.log(data)
  console.log(newdata)
}
const handleLogin = (ee) => {
  const { name, value } = ee.target;
  setLogin({ ...login, [name]: value });
  setda([...da, login]);
}
const Log=()=>{
  const loggedInUser = newdata.find(user => user.email === login.emailid && user.pass === login.password);
  if (loggedInUser) {
    alert('Login successful!');
   
  } else {
    alert('Incorrect email or password.');
    setLogin({ emailid: "", password: "" });
  }
};





  return(
    <div>
      {registered ?(
        <div>
       
          <p>Email:<input value={login.emailid} type="email" name="emailid" onChange={handleLogin} required/></p>
          <p>Password:<input value={login.password} type="password" name="password" onChange={handleLogin} required/></p>
          <button onClick={Log}>Login</button>
        </div>
      ):(<>
        <form onSubmit={handleSubmit}>
          <p>Name:<input value={data.name} type="text" name="name" onChange={handleSave} required/></p>
          <p>Email:<input value={data.email} type="email" name="email" onChange={handleSave} required/></p>
          <p>Password:<input value={data.pass} type="password" name="pass" onChange={handleSave} required/></p>
          <button>Register</button>
        </form></>)  }
    </div>
  )
}
export default Authenticate;
 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}