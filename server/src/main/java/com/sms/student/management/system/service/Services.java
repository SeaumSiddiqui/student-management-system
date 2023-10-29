package com.sms.student.management.system.service;

import com.sms.student.management.system.model.Student;

import java.util.List;

public interface Services {
    Student addStudent(Student student);
    Student getStudentById(Long id);
    List<Student> getStudentList();
    Student updateStudent(Student student, Long id);
    void deleteStudent(Long id);
}
