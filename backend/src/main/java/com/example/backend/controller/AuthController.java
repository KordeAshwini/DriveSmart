//package com.example.backend.controller;
//
//import com.example.backend.dto.*;
//import com.example.backend.service.AuthService;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/auth")
//@CrossOrigin(origins = "http://localhost:5173")
//public class AuthController {
//
//    @Autowired
//    private AuthService authService;
//
//    @PostMapping("/register")
//    public String register(@RequestBody RegisterRequest request){
//
//        return authService.register(request);
//    }
//
//    @PostMapping("/verify-email")
//    public String verifyEmail(@RequestBody VerifyEmailOtpRequest request){
//
//        return authService.verifyEmail(request);
//    }
//
//    @PostMapping("/login")
//    public String login(@RequestBody LoginRequest request){
//
//        return authService.login(request);
//    }
//
//    @PostMapping("/forgot-password")
//    public String forgotPassword(@RequestBody ForgotPasswordRequest request){
//
//        return authService.forgotPassword(request);
//    }
//
//    @PostMapping("/reset-password")
//    public String resetPassword(@RequestBody ResetPasswordRequest request){
//
//        return authService.resetPassword(request);
//    }
//}

package com.example.backend.controller;

import com.example.backend.dto.*;
import com.example.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request){
        return authService.register(request);
    }

    @PostMapping("/verify-email")
    public String verifyEmail(@RequestBody VerifyEmailOtpRequest request){
        return authService.verifyEmailOtp(request);
    }

//    @PostMapping("/login")
//    public String login(@RequestBody LoginRequest request){
//        return authService.login(request);
//    }
@PostMapping("/login")
public Map<String, Object> login(@RequestBody LoginRequest request){
    return authService.login(request);
}
    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestBody ForgotPasswordRequest request){
        return authService.forgotPassword(request);
    }

    @PostMapping("/verify-reset-otp")
    public String verifyResetOtp(@RequestBody VerifyResetOtpRequest request){
        return authService.verifyResetOtp(request);
    }

    @PostMapping("/reset-password")
    public String resetPassword(@RequestBody ResetPasswordRequest request){
        return authService.resetPassword(request);
    }
}