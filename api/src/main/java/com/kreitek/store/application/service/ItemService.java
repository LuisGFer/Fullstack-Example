package com.kreitek.store.application.service;


import com.kreitek.store.application.dto.ItemDTO;
import com.kreitek.store.domain.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    List<ItemDTO> getAllItemsByCategory(Long categoryId);
    Optional<ItemDTO> getItemById(Long itemId);
    ItemDTO saveItem(ItemDTO itemDTO);
    void deleteItem(Long itemId);
}
