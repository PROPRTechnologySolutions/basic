var myform=$("form#myform");myform.submit(function(event){event.preventDefault();var service_id="propr";var template_id="propradmin";myform.find("button").text("Sending...");emailjs.sendForm(service_id,template_id,"myform").then(function(){alert("Sent!");myform.find("button").text("Send");},function(err){alert("Send email failed!\r\n Response:\n "+JSON.stringify(err));myform.find("button").text("Send");});return false;});
