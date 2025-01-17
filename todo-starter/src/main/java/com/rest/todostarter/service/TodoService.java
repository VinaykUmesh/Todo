package com.rest.todostarter.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.rest.todostarter.model.Todo;

@Service
public class TodoService {
		
	private static List<Todo> todos = new ArrayList<Todo>();
	//private static int idCounter = 0;
	
//	static {
//		todos.add(new Todo(++idCounter,"Umesh","Learn TO Fight Alone",new Date(),false));
//		todos.add(new Todo(++idCounter,"Umesh","Learn TO Study",new Date(),false));
//		todos.add(new Todo(++idCounter,"Umesh","Learn TO be Alone",new Date(),false));
//	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		
		if(todo == null) {
			return null;
		}
		
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}
	
	public Todo save(Todo todo) {

		if(todo.getId() == -1 || todo.getId() == 0) {
			//todo.setId(++idCounter);
			todos.add(todo);
		}else { 
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

	public Todo findById(long id) {
		for(Todo todo : todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	
	
}
