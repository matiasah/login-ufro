package cl.ufro.auth.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserInfoController {
    
    @GetMapping("userinfo")
	public Object user() {
		return SecurityContextHolder.getContext().getAuthentication();
	}

}
