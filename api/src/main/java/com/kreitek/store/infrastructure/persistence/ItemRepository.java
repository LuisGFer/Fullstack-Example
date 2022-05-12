package com.kreitek.store.infrastructure.persistence;


import com.kreitek.store.domain.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findAllByCategoryId(Long id);
}
