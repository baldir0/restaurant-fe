import { Flex } from "@chakra-ui/react";

import { Pagination } from "../Common/Pagination/Pagination";
import { SyntheticEvent, useEffect, useState } from "react";
import { SearchBox } from "../Common/SearchBox/SearchBox";
import { LargeList } from "../Common/List/LargeList";
import { RestaurantListItem } from "./RestaurantListElement/RestaurantListElement";

import { RestaurantEntity } from '@types';

export const RestaurantList = () => {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [restaurantList, setRestaurantList] = useState<{data: RestaurantEntity,file: Buffer}[]>([])

  const handleSerch = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(searchValue);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3001/restaurant");
      const data : {data: RestaurantEntity, file: Buffer}[] = await response.json();
      setRestaurantList(data);
    })()
  }, []);

  return (
    <Flex p="10px" w="full" direction={"column"}>
      <SearchBox
        searchString={searchValue}
        w={"64ch"}
        onChange={(e) => setSearchValue(e.target.value)}
        onSubmit={handleSerch}
      />
      <LargeList>
        {restaurantList.map((el) => {
          return (
            <RestaurantListItem
              key={el.data.id}
              data={el.data}
              img={el.file}
            />
          );
        })}
      </LargeList>

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
