package cl.ufro.auth.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

    // Login form
    @RequestMapping("/login")
    public ModelAndView login() {
        return new ModelAndView("oauth2");
    }

}
