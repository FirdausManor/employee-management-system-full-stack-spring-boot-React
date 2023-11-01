package com.tutorial.employeemanagementbackend.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.tutorial.employeemanagementbackend.model.Employee;
import com.tutorial.employeemanagementbackend.repository.EmployeeRepository;

@Service
public class EmployeeService implements EmployeeServiceInterface {
	@Autowired
	protected EmployeeRepository employeeRepository;

	@Override
	public Employee saveEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public Optional<Employee> getEmplyeeById(int id) {
		return employeeRepository.findById(id);
	}

	@Override
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
	}

	@Override
	public Employee updateEmployee(int id, Employee employee) {
		Employee employeeToUpdate = employeeRepository.findById(id).orElseThrow();
		employeeToUpdate.setFirstName(employee.getFirstName());
		employeeToUpdate.setLastName(employee.getLastName());
		employeeToUpdate.setAge(employee.getAge());
		employeeToUpdate.setGender(employee.getGender());
		employeeToUpdate.setDepartment(employee.getDepartment());
		employeeToUpdate.setLevel(employee.getLevel());
		employeeToUpdate.setEmail(employee.getEmail());
		return employeeRepository.save(employeeToUpdate);
	}

	@Override
	public void deleteEmployee(int id) {
		employeeRepository.deleteById(id);
	}
	
}
