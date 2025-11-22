package com.apartmentstreamline.repository;

import com.apartmentstreamline.model.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApartmentRepository extends JpaRepository<Apartment, Long> {
}
