package com.usecase.elearn.auth;


import com.usecase.elearn.enums.Role;

import lombok.*;

@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class RegisterRequest {

    private String name;
    private String email;
    private String password;
    private Role role;
}
