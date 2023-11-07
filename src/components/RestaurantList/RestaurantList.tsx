import { Flex, List } from "@chakra-ui/react";
import { RestaurantListElement } from "./RestaurantListElement/RestaurantListElement";
import { Pagination } from "../Common/Pagination/Pagination";
import { SyntheticEvent, useState } from "react";
import { SearchBox } from "../Common/SearchBox/SearchBox";

export const RestaurantList = () => {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSerch = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(searchValue);
  };

  return (
    <Flex p="10px" w="full" direction={"column"}>
      <SearchBox
        searchString={searchValue}
        w={"64ch"}
        onChange={(e) => setSearchValue(e.target.value)}
        onSubmit={handleSerch}
      />
      <List
        w="full"
        h="calc(100vh - 200px)"
        border={"1px solid"}
        borderColor={"gray.200"}
        borderRadius={"1rem"}
        p={"10px"}
        overflow={"auto"}
      >
        <RestaurantListElement
          src="/src/assets/markers/current_location.icon.png"
          targetId="123"
        />
        <RestaurantListElement
          src="/src/assets/markers/current_location.icon.png"
          targetId="123"
        />
        <RestaurantListElement
          src="/src/assets/markers/current_location.icon.png"
          targetId="123"
        />
        <RestaurantListElement
          src="/src/assets/markers/current_location.icon.png"
          targetId="123"
        />
        <RestaurantListElement
          src="/src/assets/markers/current_location.icon.png"
          targetId="123"
        />
        <RestaurantListElement
          src="/src/assets/markers/current_location.icon.png"
          targetId="123"
        />
        <RestaurantListElement
          src="/src/assets/markers/current_location.icon.png"
          targetId="123"
        />
        <RestaurantListElement
          src="/src/assets/markers/current_location.icon.png"
          targetId="123"
        />
        <RestaurantListElement
          src="/src/assets/markers/current_location.icon.png"
          targetId="123"
        />
        <RestaurantListElement
          src="/src/assets/markers/current_location.icon.png"
          targetId="123"
        />
      </List>

      <Pagination
        currentPage={page}
        pages={50}
        previousDisplayCount={3}
        nextDisplayCount={3}
        setPage={setPage}
      />
    </Flex>
  );
};
