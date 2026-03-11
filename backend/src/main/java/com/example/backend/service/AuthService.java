//package com.example.backend.service;
//
//import com.example.backend.dto.*;
//import com.example.backend.entity.User;
//import com.example.backend.repository.UserRepository;
//import com.example.backend.security.JwtUtil;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.Random;
//
//@Service
//public class AuthService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private EmailService emailService;
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//
//    private String generateOTP(){
//        Random random = new Random();
//        return String.valueOf(100000 + random.nextInt(900000));
//    }
//
//    // REGISTER
//    public String register(RegisterRequest request){
//
//        if(userRepository.findByEmail(request.getEmail()).isPresent()){
//            return "Email already registered";
//        }
//
//        String otp = generateOTP();
//
//        User user = new User();
//
//        user.setName(request.getName());
//        user.setEmail(request.getEmail());
//        user.setPassword(encoder.encode(request.getPassword()));
//        user.setRole(request.getRole());
//        user.setVerified(false);
//        user.setOtp(otp);
//        user.setOtpExpiry(LocalDateTime.now().plusMinutes(5));
//
//        userRepository.save(user);
//
//        emailService.sendOTP(user.getEmail(),otp);
//
//        return "OTP sent to email";
//    }
//
//    // VERIFY EMAIL
//    public String verifyEmail(VerifyEmailOtpRequest request){
//
//        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
//
//        if(user.getOtpExpiry().isBefore(LocalDateTime.now())){
//            return "OTP expired";
//        }
//
//        if(!user.getOtp().equals(request.getOtp())){
//            return "Invalid OTP";
//        }
//
//        user.setVerified(true);
//        user.setOtp(null);
//
//        userRepository.save(user);
//
//        return "Email verified successfully";
//    }
//
//    // LOGIN
//    public String login(LoginRequest request){
//
//        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
//
//        if(!user.isVerified()){
//            return "Verify email first";
//        }
//
//        if(!encoder.matches(request.getPassword(),user.getPassword())){
//            return "Invalid credentials";
//        }
//
//        return jwtUtil.generateToken(user.getEmail());
//    }
//
//    // FORGOT PASSWORD
//    public String forgotPassword(ForgotPasswordRequest request){
//
//        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
//
//        String otp = generateOTP();
//
//        user.setOtp(otp);
//        user.setOtpExpiry(LocalDateTime.now().plusMinutes(5));
//
//        userRepository.save(user);
//
//        emailService.sendOTP(user.getEmail(),otp);
//
//        return "OTP sent to email";
//    }
//
//    // RESET PASSWORD
//    public String resetPassword(ResetPasswordRequest request){
//
//        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
//
//        if(user.getOtpExpiry().isBefore(LocalDateTime.now())){
//            return "OTP expired";
//        }
//
//        if(!user.getOtp().equals(request.getOtp())){
//            return "Invalid OTP";
//        }
//
//        user.setPassword(encoder.encode(request.getNewPassword()));
//        user.setOtp(null);
//
//        userRepository.save(user);
//
//        return "Password reset successful";
//    }
//}

package com.example.backend.service;

import com.example.backend.dto.*;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.Random;
import java.util.Map;
import java.util.HashMap;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private JwtUtil jwtUtil;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    private String generateOtp(){
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    // REGISTER
    public String register(RegisterRequest request){

        if(userRepository.findByEmail(request.getEmail()).isPresent())
            throw new RuntimeException("Email already exists");

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(encoder.encode(request.getPassword()));
        user.setRole(request.getRole());
        user.setVerified(false);

        String otp = generateOtp();

        user.setEmailOtp(otp);
        user.setEmailOtpExpiry(LocalDateTime.now().plusMinutes(5));

        userRepository.save(user);

        emailService.sendOtp(user.getEmail(),"Email Verification OTP",otp);

        return "User registered. Verify OTP.";
    }

    // VERIFY EMAIL OTP
    public String verifyEmailOtp(VerifyEmailOtpRequest request){

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(!user.getEmailOtp().equals(request.getOtp()))
            throw new RuntimeException("Invalid OTP");

        if(user.getEmailOtpExpiry().isBefore(LocalDateTime.now()))
            throw new RuntimeException("OTP expired");

        user.setVerified(true);
        user.setEmailOtp(null);
        user.setEmailOtpExpiry(null);

        userRepository.save(user);

        return "Email verified successfully";
    }

    // LOGIN
//    public String login(LoginRequest request){
//
//        User user = userRepository.findByEmail(request.getEmail())
//                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
//
//        if(!encoder.matches(request.getPassword(),user.getPassword()))
//            throw new RuntimeException("Invalid credentials");
//
//        if(!user.isVerified())
//            throw new RuntimeException("Email not verified");
//
//        return jwtUtil.generateToken(user.getEmail());
//    }
    public Map<String, Object> login(LoginRequest request){

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(!encoder.matches(request.getPassword(), user.getPassword())){
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(user.getEmail());

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("name", user.getName());

        return response;
    }

    // FORGOT PASSWORD
    public String forgotPassword(ForgotPasswordRequest request){

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String otp = generateOtp();

        user.setResetOtp(otp);
        user.setResetOtpExpiry(LocalDateTime.now().plusMinutes(5));

        userRepository.save(user);

        emailService.sendOtp(user.getEmail(),"Password Reset OTP",otp);

        return "Reset OTP sent";
    }

    // VERIFY RESET OTP
    public String verifyResetOtp(VerifyResetOtpRequest request){

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(!user.getResetOtp().equals(request.getOtp()))
            throw new RuntimeException("Invalid OTP");

        if(user.getResetOtpExpiry().isBefore(LocalDateTime.now()))
            throw new RuntimeException("OTP expired");

        return "OTP verified";
    }

    // RESET PASSWORD
    public String resetPassword(ResetPasswordRequest request){

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setPassword(encoder.encode(request.getNewPassword()));
        user.setResetOtp(null);
        user.setResetOtpExpiry(null);

        userRepository.save(user);

        return "Password reset successful";
    }
}