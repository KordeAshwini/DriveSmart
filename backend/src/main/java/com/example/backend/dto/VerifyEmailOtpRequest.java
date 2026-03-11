package com.example.backend.dto;

import lombok.Data;

@Data
public class VerifyEmailOtpRequest {

    private String email;
    private String otp;
}