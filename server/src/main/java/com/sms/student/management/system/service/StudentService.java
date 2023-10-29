package com.sms.student.management.system.service;

import com.sms.student.management.system.exception.StudentNotFoundException;
import com.sms.student.management.system.exception.StudentAlreadyExistsException;
import com.sms.student.management.system.model.Student;
import com.sms.student.management.system.repository.StudentRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService implements Services{
    private final StudentRepo studentRepo;

    @Override
    public List<Student> getStudentList() {
        return studentRepo.findAll();
    }

    @Override
    public Student addStudent(Student student) {

        if (studentAlreadyExists(student.getEmail())) {
            throw new StudentAlreadyExistsException(student.getEmail() + " Already Exists");
        }
        return studentRepo.save(student);
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepo.findById(id).orElseThrow(() -> new StudentNotFoundException("Sorry, No student found with the Id: " + id));
    }

    @Override
    public Student updateStudent(Student student, Long id) {

        return studentRepo.findById(id).map(st -> {
            st.setFirstName(student.getFirstName());
            st.setLastName(student.getLastName());
            st.setEmail(student.getEmail());
            st.setDepartment(student.getDepartment());

            return studentRepo.save(st);
        }).orElseThrow(() -> new StudentNotFoundException("Sorry, This student could not be found"));
    }

    @Override
    public void deleteStudent(Long id) {

        if (!studentRepo.existsById(id)) {
            throw new StudentNotFoundException("Sorry, Student not found");
        }
        studentRepo.deleteById(id);
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepo.findByEmail(email).isPresent();
    }
}
