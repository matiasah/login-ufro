package cl.ufro.auth.controller;

import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.provider.AuthorizationRequest;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

/**
 * Controller for retrieving the model for and displaying the confirmation page
 * for access to a protected resource.
 *
 * @author Ryan Heaton
 */
@Controller
@SessionAttributes(types = AuthorizationRequest.class)
public class AccessConfirmationController {

    @Autowired
    private ClientDetailsService clientDetailsService;

    @RequestMapping("/oauth/confirm_access")
    public ModelAndView getAccessConfirmation(@ModelAttribute AuthorizationRequest clientAuth) throws Exception {
        // Buscar cliente
        ClientDetails client = clientDetailsService.loadClientByClientId(clientAuth.getClientId());

        // Atributos de la vista
        TreeMap<String, Object> model = new TreeMap<String, Object>();

        model.put("auth_request", clientAuth);
        model.put("client", client);

        // Vista a mostrar
        return new ModelAndView("access_confirmation", model);
    }

}