package com.surjo.ChallengeApp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Challenge {
    @Id
    private  Long id;
    @Column(name = "challenge_name") // Changed column name
    private String name;
    @Column(name = "challenge_month") // Added column for month
    private String month;
    private  String description;

    public Challenge() {

    }

    public Challenge(Long id,String name, String month, String description) {
        this.id = id;
        this.name = name;
        this.month = month;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
