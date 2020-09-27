package cl.ufro.auth.controller;

import java.security.Principal;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.provider.AuthorizationRequest;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
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
    public ModelAndView getAccessConfirmation() throws Exception {
        return new ModelAndView("index");
    }

    @GetMapping("/oauth/confirm_access/client")
    public ResponseEntity<Object> getClientDetails(@AuthenticationPrincipal Principal principal, @ModelAttribute AuthorizationRequest clientAuth) throws Exception {
        // Buscar cliente
        ClientDetails client = clientDetailsService.loadClientByClientId(clientAuth.getClientId());

        // Atributos de la vista
        TreeMap<String, Object> model = new TreeMap<String, Object>();

        model.put("principal", principal);
        model.put("authRequest", clientAuth);
        model.put("client", client);

        // Respuesta
        return ResponseEntity.ok(model);
    }

}