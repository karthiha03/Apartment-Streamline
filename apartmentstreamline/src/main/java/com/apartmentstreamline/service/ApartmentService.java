package com.apartmentstreamline.service;

import com.apartmentstreamline.model.Apartment;
import com.apartmentstreamline.repository.ApartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApartmentService {

    private final ApartmentRepository apartmentRepository;

    public ApartmentService(ApartmentRepository apartmentRepository) {
        this.apartmentRepository = apartmentRepository;
    }

    public List<Apartment> getAllApartments() {
        return apartmentRepository.findAll();
    }

    public Apartment saveApartment(Apartment apartment) {
        return apartmentRepository.save(apartment);
    }
}
