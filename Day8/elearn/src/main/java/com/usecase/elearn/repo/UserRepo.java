package com.usecase.elearn.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usecase.elearn.model.User;

import java.util.Optional;


public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
