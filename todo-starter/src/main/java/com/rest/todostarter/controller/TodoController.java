package com.rest.todostarter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.rest.todostarter.model.Todo;
import com.rest.todostarter.service.TodoService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping("/user/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}
	
	@DeleteMapping("/user/{username}/todos/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable String username,@PathVariable long id) {
		Todo todo = todoService.deleteById(id);
		 if(todo !=  null) {
			 return ResponseEntity.noContent().build();
		 }else {
			return ResponseEntity.notFound().build(); 
		 }
	}
}