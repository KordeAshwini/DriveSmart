//package com.example.backend.entity;
//
//import jakarta.persistence.*;
//import lombok.Data;
//import java.time.LocalDateTime;
//
//@Entity
//@Data
//@Table(name="users")
//public class User {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//
//    @Column(unique=true)
//    private String email;
//
//    private String password;
//
//    private String role; // USER or OWNER
//
//    private boolean verified;
//
//    private String otp;
//
//    private LocalDateTime otpExpiry;
//}

package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    private String role; // USER or OWNER

    private boolean verified;

    // EMAIL VERIFICATION OTP
    private String emailOtp;
    private LocalDateTime emailOtpExpiry;

    // PASSWORD RESET OTP
    private String resetOtp;
    private LocalDateTime resetOtpExpiry;
}