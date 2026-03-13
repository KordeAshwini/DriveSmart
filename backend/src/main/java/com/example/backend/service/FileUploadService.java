package com.example.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class FileUploadService {

    private final String uploadDir = "uploads/";

    public String uploadFile(MultipartFile file) throws IOException {

        File dir = new File(uploadDir);

        if (!dir.exists()) {
            dir.mkdirs();
        }

        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();

        String path = uploadDir + fileName;

        file.transferTo(new File(path));

        return path;
    }
}