

$(document).ready(function()
{
	$("#table").hide();
	

	$("#admin").click(function(){
		$("#table").show();
		$("#input_box").hide();
	});

	$("#user").click(function(){
		$("#table").hide();
		$("#input_box").show();
	});

	function getAge(dateString) 
	{
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
		{
			age--;
		}
		(age < 0)? age = 0 : true;
		return age;
	}
	var call_age;
	var k = 0;
	
	$("#dob").on("change",function() {
		call_age = getAge($("#dob").val());
		$("#age").val(call_age);
	}); 
		
	$("#pform").on("submit",function(event)
	{
		event.preventDefault();
		var fstname = $("#fname").val();
		var lstname = $("#lname").val();
		var dob = $("#dob").val();
		var age = $("#age").val();
		var contactno = $("#contact").val();
		var detail = $("#detail").val();
		
		var d = new Date(),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		currentdate = [year, month, day].join('-');
			
		
		if (fstname=="" || fstname == null){
			alert("First name cannot remain empty");
			return false;
		} else if (lstname=="" || lstname == null){
			alert("Last name cannot remain empty");
			return false;
		} else if (dob=="" || dob == null){
			alert("Date of Birth cannot remain empty");
			return false; 
		} else if (contactno=="" || contactno == null){
			alert("Contant no cannot remain empty");
			return false;
		} else if (!fstname.match(/^[a-zA-Z_]+$/)) {
			alert("First name must be alphabet")
			return false
		} else if (!lstname.match(/^[a-zA-Z_]+$/)) {
			alert("Last name should be alphabet")
			return false
		} else if(currentdate <= dob){
			alert("Date cannot be greater than today");
			return false;
		} else if((age >120) || (age<0) ) {
			alert("Please provide proper age.");
			return false;
		} else if ( (contactno > 9999999999) || (contactno < 1000000000) ) {
			alert("Please provide correct contact no");
			return false;
		}
		 
		k++;
		var tr = "<tr><td>" + k + " " + "</td>" +
						"<td>" + fstname + "</td>" +
						"<td>" + lstname + "</td>" +
						"<td>" + call_age + "</td>" +
						"<td>" + dob + "</td>" +
						"<td>" + contactno + "</td>" +
						"<td>" + detail + "</td>" +
						
					"</tr>"  ;
					$("#tableid").append(tr);
					
		$("#pform").trigger("reset");
		
					
	});
	
	$("#myInput").on("keyup",function() 
	{
		var input, filter, table, tr, td, i,j;
		input = document.getElementById("myInput");
		filter = input.value.toUpperCase();
		table = document.getElementById("tableid");
		tr = table.getElementsByTagName("tr");
		for (i = 1; i < tr.length; i++) {
			for(j=1;j<=2;j++){
				td = tr[i].getElementsByTagName("td")[j];	
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
				break;
			} else {
				tr[i].style.display = "none";
			}			 
			}   
		}
	});
	
	

	
	
});


