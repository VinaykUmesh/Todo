package com.rest.todostarter.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.rest.todostarter.model.Todo;

@Service
public class TodoService {
		
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter,"Umesh","Learn TO Fight Alone",new Date(),false));
		todos.add(new Todo(++idCounter,"Umesh","Learn TO Study",new Date(),false));
		todos.add(new Todo(++idCounter,"Umesh","Learn TO be Alone",new Date(),false));
	}

	public List<Todo> findAll() {
		return todos;
	}
	
}
