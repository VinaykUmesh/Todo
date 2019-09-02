package com.rest.todostarter.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.rest.todostarter.model.HelloWorldBean;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloWorldController {
		
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World");
	}
	
	@GetMapping(path = "/hello-world-bean/path/{name}")
	public HelloWorldBean helloWorldBeanPath(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello %s", name));
	}
}
