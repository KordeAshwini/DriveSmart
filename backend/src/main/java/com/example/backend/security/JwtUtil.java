//package com.example.backend.security;
//
//import io.jsonwebtoken.*;
//import io.jsonwebtoken.security.Keys;
//import org.springframework.stereotype.Component;
//
//import java.security.Key;
//import java.util.Date;
//
//@Component
//public class JwtUtil {
//
//    private final String SECRET = "drivesmart_secret_key_drivesmart_secret_key";
//
//    private Key getKey(){
//        return Keys.hmacShaKeyFor(SECRET.getBytes());
//    }
//
//    public String generateToken(String email){
//
//        return Jwts.builder()
//                .subject(email)
//                .issuedAt(new Date())
//                .expiration(new Date(System.currentTimeMillis()+86400000))
//                .signWith(getKey())
//                .compact();
//    }
//
//}

package com.example.backend.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    private final String SECRET = "drivesmartsecretkeydrivesmartsecretkey";

    private final SecretKey key = Keys.hmacShaKeyFor(SECRET.getBytes());

    // Generate JWT token
    public String generateToken(String email) {

        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 86400000)) // 24 hours
                .signWith(key)
                .compact();
    }

    // Extract email from token
    public String extractEmail(String token) {

        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }
}