package brotasco.modul254project_server.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import brotasco.modul254project_server.Business.BusinessServiceUser;
import brotasco.modul254project_server.Entities.Status;
import brotasco.modul254project_server.Entities.User;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/register", method=RequestMethod.PUT)
	public Status register(@RequestBody User user){
		Status status = new Status();
		User returnedUser = BusinessServiceUser.register(user);
		if(returnedUser == null){
			status.setStatus(false);
			status.setMessage("Failed to register, please try again later.");
		} else {
			status.setReturnObject(returnedUser);
			status.setStatus(true);
			status.setMessage("Registration successful!");
		}
		return status;
	}
	
}
