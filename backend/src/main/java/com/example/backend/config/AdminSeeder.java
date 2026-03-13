package com.example.backend.config;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class AdminSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {

        String adminEmail = "admin@drivesmart.com";

        if(userRepository.findByEmail(adminEmail).isEmpty()){

            User admin = new User();

            admin.setName("System Admin");
            admin.setEmail(adminEmail);
            admin.setPassword(passwordEncoder.encode("admin@123"));
            admin.setRole("ADMIN");
            admin.setVerified(true);

            userRepository.save(admin);

            System.out.println("✅ Admin account created");
        }
        else{
            System.out.println("⚡ Admin already exists");
        }
    }
}