package by.enrollee.mslu.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class HomeController {

    @RequestMapping(value = "/anketa")
    public String showHomePage(){
        return "anketa";
    }

}
