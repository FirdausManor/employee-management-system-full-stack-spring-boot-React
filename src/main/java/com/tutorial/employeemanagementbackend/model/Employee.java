package com.tutorial.employeemanagementbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "employee_management")
@Data
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	protected int id;
	
	@Column(name = "first_name")
	protected String firstName;
	
	@Column(name = "last_name")
	protected String lastName;
	
	@Column(name = "age")
	protected int age;
	
	@Column(name = "gender")
	protected String gender;
	
	@Column(name = "department")
	protected String department;
	
	@Column(name = "level")
	protected String level;
	
	@Column(name = "email")
	protected String email;
}
