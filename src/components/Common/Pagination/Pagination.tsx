import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { IconButton, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PaginationButton } from "../Buttons/PaginationButton";

interface Props {
  pages: number;
  currentPage: number;
  setPage: (value: React.SetStateAction<number>) => void;
  previousDisplayCount?: number;
  nextDisplayCount?: number;
}

type Direction = "SingleForward" | "Forward" | "Backward" | "SingleBackward";

export const Pagination = ({
  currentPage = 1,
  pages = 1,
  previousDisplayCount = 5,
  nextDisplayCount = 5,
  setPage,
}: Props) => {
  const handlePageChange = (direction: Direction) => {
    switch (direction) {
      case "SingleForward":
        if (currentPage + 1 <= pages) setPage((curr) => curr + 1);
        break;
      case "SingleBackward":
        if (currentPage - 1 >= 1) setPage((curr) => curr - 1);
        break;
      case "Forward":
        if (currentPage + nextDisplayCount <= pages) {
          setPage((curr) => curr + nextDisplayCount);
          break;
        }
        setPage(pages);
        break;
      case "Backward":
        if (currentPage + previousDisplayCount >= 1) {
          setPage((curr) => curr - nextDisplayCount);
          break;
        }
        setPage(1);
        break;
    }
  };

  const getButtons = (): ReactNode[] => {
    const outputArr = [];

    const startPage =
      currentPage - previousDisplayCount <= 0
        ? 1
        : currentPage - previousDisplayCount;
    const endPage =
      currentPage + nextDisplayCount > pages
        ? pages
        : currentPage + nextDisplayCount;

    if (startPage !== 1)
      outputArr.push(
        <PaginationButton
          aria-label="test"
          text="..."
          key={"previousBulk"}
          onClick={() => handlePageChange("Backward")}
        />
      );

    for (let index = startPage; index <= endPage; index++) {
      if (index === currentPage) {
        outputArr.push(
          <PaginationButton text={currentPage} active key={currentPage} />
        );
        continue;
      }
      outputArr.push(
        <PaginationButton
          text={index}
          key={index}
          onClick={() => setPage(index)}
        />
      );
    }

    if (endPage !== pages)
      outputArr.push(
        <PaginationButton
          aria-label="test"
          text="..."
          onClick={() => handlePageChange("Forward")}
          key={"nextBulk"}
        />
      );
    return outputArr;
  };

  return (
    <Stack
      p={"10px"}
      alignItems={"center"}
      justifyContent={"center"}
      direction={"row"}
      w={"100%"}
    >
      <IconButton
        aria-label={"Previous-Page"}
        icon={<ArrowLeftIcon />}
        onClick={() => handlePageChange("SingleBackward")}
      />
      {getButtons()}
      <IconButton
        aria-label={"Next-Page"}
        icon={<ArrowRightIcon />}
        onClick={() => handlePageChange("SingleForward")}
      />
    </Stack>
  );
};
