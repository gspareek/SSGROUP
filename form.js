


async function submitForm(){
    
    var name =document.getElementById("name").value;
    var contact=document.getElementById("contact").value;
    alert(contact)
    var course=document.getElementById("course").value;
var string = { "Name": name,
    "Contact": contact,
    "Course":course}
     fetch("https://sheetdb.io/api/v1/qqq35gbtvsqa3", {
  method: "POST",
  headers: {
					'Content-Type': 'application/json'
				},
  body:JSON.stringify(string),
})
  .then((res) => res.json())
  .then((json) =>document.write(JSON.stringify(json)));
}