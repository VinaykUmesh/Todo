package com.rest.todostarter.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.rest.todostarter.model.Todo;
import com.rest.todostarter.resource.TodoJpaRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

	//@Autowired
	//private TodoService todoService;
	
	@Autowired
	private TodoJpaRepository todoJpaRepository;

	@GetMapping("/jpa/user/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoJpaRepository.findByUsername(username);
		//return todoService.findAll();
	}
	
	@GetMapping("/jpa/user/{username}/todos/{id}")
	public Todo getTodos(@PathVariable String username, @PathVariable long id) {
		return todoJpaRepository.findById(id).get();
		//return todoService.findById(id);
	}
	
	@PutMapping("/jpa/user/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {

		todo.setUsername(username);
		todoJpaRepository.save(todo);
		return new ResponseEntity<Todo>(todo , HttpStatus.OK);
	}
	
	@PostMapping("jpa/user/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
		todo.setUsername(username);
		Todo create = todoJpaRepository.save(todo);
		
		URI uri =ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
			.buildAndExpand(create.getId()).toUri();		
		return ResponseEntity.created(uri).build();
	}

	@DeleteMapping("/jpa/user/{username}/todos/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable long id) {
	todoJpaRepository.deleteById(id);
	//	if (todo != null) {
			return ResponseEntity.noContent().build();
//		} else {
//			return ResponseEntity.notFound().build();
//		}
	}
}
