package com.tutorial.employeemanagementbackend.service;

import java.util.List;
import java.util.Optional;
import com.tutorial.employeemanagementbackend.model.Employee;

public interface EmployeeServiceInterface {
	public Employee saveEmployee(Employee employee);
	public Optional<Employee> getEmplyeeById(int id);
	List<Employee> getAllEmployees();
	Employee updateEmployee(int id, Employee employee);
	void deleteEmployee(int id);
}
