package com.rest.todostarter.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @GetMapping(path = "/hello-world")
    public String helloworld(){
        return "hello to allll........";
    }

}