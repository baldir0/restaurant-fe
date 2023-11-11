import { Flex } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { RestaurantMenu } from "../RestaurantMenu/RestaruantMenu";
import { SmallList } from "../Common/List/SmallList";
import { TextMedium } from "../Common/Text/TextMedium";
import { SmallListItem } from "../Common/List/SmallListItem";
import { LinkButton } from "../Common/Buttons/LinkButton";
import { useEffect, useState } from "react";
import {
  OpenHoursTime,
  RestaurantEntity,
} from "../../../../restaurant-be/types/restaurant";

type PathParams = {
  id: string;
};

export const RestaurantPage = () => {
  const { id } = useParams<PathParams>();
  const [data, setData] = useState<[RestaurantEntity | null, Buffer | null]>([
    null,
    null,
  ]);
  useEffect(() => {
    (async () => {
      const rawRestData = await fetch(`http://localhost:3001/restaurant/${id}`);
      const restData: [RestaurantEntity, Buffer | null] =
        await rawRestData.json();
      console.log(restData[0].openHours);
      restData[0].openHours = JSON.parse(restData[0].openHours as string);
      console.log(restData[0].openHours);
      setData(restData);
    })();
  }, []);
  //Fetch the restaurant data

  if (!id || data[0] === null) {
    return <Text>Cannot fint whatever you were looking for ...</Text>;
  }

  return (
    <Flex
      w="full"
      direction="row"
      p="10px"
      gap={"2rem"}
      maxH={"calc(100vh - 60px)"}
      overflow={"auto"}
    >
      <Flex direction={"column"} grow={0}>
        <Image
          src={data[1] ?? ""}
          alt="RestaurantImage"
          w="16rem"
          h="16rem"
          border={"1px solid black"}
        />
        <Flex direction={"column"}>
          <TextMedium>Open:</TextMedium>
          {data[0].openHours && (
            <SmallList>
              <TextMedium>
                {Object.entries(data[0].openHours).map((val) => {
                  if (val[1] === null) return null;
                  return (
                    <SmallListItem key={data[0]?.id + '-' + val[0]}>
                      {val[0].toUpperCase()} - {val[1].from && val[1].to ? val[1].from + "-" + val[1].to : "Closed"}
                    </SmallListItem>
                  );
                })}
              </TextMedium>
            </SmallList>
          )}
          <LinkButton to={`/restaurant/${id}/addProduct`}>
            Add Product
          </LinkButton>
        </Flex>
      </Flex>
      <Flex direction={"column"} grow={1}>
        <Text as="p" fontSize={"2.5rem"}>
          {data[0].name}
        </Text>
        <Text as="p" fontSize={"1.25rem"}>
          {data[0].description}
        </Text>
        <RestaurantMenu restaurantId={id} />
      </Flex>
    </Flex>
  );
};
