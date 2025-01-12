package com.surjo.ChallengeApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ChallengeService {
    //private List<Challenge> challenges = new ArrayList<>();
    private Long nextId = 1L;

    @Autowired
    ChallengeRepository challengeRepository;
    public  ChallengeService(){

    }
    public List<Challenge> getAllChallenges(){
        return challengeRepository.findAll();
    }
    public boolean addChallenge(Challenge challenge) {
        if (challenge != null) {
            List<Challenge> challenges = challengeRepository.findAll();
            if (!challenges.isEmpty()) {
                long lastId = challenges.get(challenges.size() - 1).getId();
                challenge.setId(lastId + 1);
            } else {
                challenge.setId(1L);
            }
            challengeRepository.save(challenge);
            return true;
        } else {
            return false;
        }
    }


    public Challenge getChallenge(String month) {
        Optional<Challenge> challenge =  challengeRepository.findByMonthIgnoreCase(month);
        return  challenge.orElse(null);
    }

    public boolean updateChallenge(Long id, Challenge updatedChallenge) {
        Optional<Challenge> challenge =  challengeRepository.findById(id);
        if(challenge.isPresent()){
            Challenge challengeToUpdate = challenge.get();
            challengeToUpdate.setName(updatedChallenge.getName());
            challengeToUpdate.setMonth(updatedChallenge.getMonth());
            challengeToUpdate.setDescription(updatedChallenge.getDescription());
            challengeRepository.save(challengeToUpdate);
            return  true;
        }
        return  false;
    }

    public boolean deleteChallenge(Long id) {
        Optional<Challenge> challenge = challengeRepository.findById(id);
        if(challenge.isPresent()){
            challengeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
