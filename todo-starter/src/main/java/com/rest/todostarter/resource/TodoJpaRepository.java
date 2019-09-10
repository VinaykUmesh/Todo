package com.rest.todostarter.resource;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rest.todostarter.model.Todo;

public interface TodoJpaRepository extends JpaRepository<Todo , Long> {

	List<Todo> findByUsername(String username);
}
