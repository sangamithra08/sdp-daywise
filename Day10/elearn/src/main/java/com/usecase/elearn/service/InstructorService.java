package com.usecase.elearn.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.usecase.elearn.model.Assignment;
import com.usecase.elearn.model.Course;
import com.usecase.elearn.model.LearningMaterial;
import com.usecase.elearn.repo.AssignmentRepository;
import com.usecase.elearn.repo.CourseRepository;
import com.usecase.elearn.repo.LearningMaterialRepository;


@Service
public class InstructorService {

    @Autowired
    private CourseRepository cr;

    @Autowired
    private LearningMaterialRepository lr;

    @Autowired
    private AssignmentRepository ar;

    public Course savecourse(Course course) {
        return cr.save(course);
    }

    public String deletecourse(int id) {
        Course exists = cr.findById(id).orElse(null);
        if (exists != null) {
            cr.deleteById(id);
            return "Course deleted successfully";
        }
        return "Course not found";
    }
    public String deletematerial(int id) {
        LearningMaterial exists = lr.findById(id).orElse(null);
        if (exists != null) {
            lr.deleteById(id);
            return "Material deleted successfully";
        }
        return "Material not found";
    }
    public String deleteassignment(int id) {
        Assignment exists = ar.findById(id).orElse(null);
        if (exists != null) {
            ar.deleteById(id);
            return "Assignment deleted successfully";
        }
        return "Assignment not found";
    }
    public List<Course> allcourses() {
        return cr.findAll();
    }

    public LearningMaterial upload(LearningMaterial material) {
        return lr.save(material);
    }

    public Assignment addassign(Assignment assignment) {
        return ar.save(assignment);
    }

    public List<LearningMaterial> getall() {
        return lr.findAll();
    }

    public List<Assignment> getallassignment() {
        return ar.findAll();
    }

    public Optional<Course> getcourse(int id) {
        return cr.findById(id);
    }

    public Optional<LearningMaterial> getmaterialbyid(int id) {
        return lr.findById(id);
    }

    public Optional<Assignment> getbyid(int id) {
        return ar.findById(id);
    }

    public ResponseEntity<Course> updateCourse(int id, Course course) {
        if (cr.existsById(id)) {
            course.setId(id);
            return ResponseEntity.ok(cr.save(course));
        }
        return ResponseEntity.notFound().build();
    }

    public ResponseEntity<LearningMaterial> updateMaterial(int id,LearningMaterial learningMaterial){
        if(lr.existsById(id)){
            learningMaterial.setId(id);
            return ResponseEntity.ok(lr.save(learningMaterial));
        }
        return  ResponseEntity.notFound().build();
    }

    public ResponseEntity<Assignment> updateAssignment(int id,Assignment assignment){
        if(ar.existsById(id)){
            assignment.setId(id);
            return ResponseEntity.ok(ar.save(assignment));
        }
        return  ResponseEntity.notFound().build();
    }
}
