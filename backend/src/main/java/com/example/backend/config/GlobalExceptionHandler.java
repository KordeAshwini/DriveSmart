package com.example.backend.config;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

@ControllerAdvice
public class GlobalExceptionHandler {

    @org.springframework.web.bind.annotation.ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<String> handleFileSizeError() {
        return ResponseEntity
                .badRequest()
                .body("File size too large. Maximum allowed is 20MB.");
    }
}