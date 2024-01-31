import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const options = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average Rating",
    },
  ];

  const handleSortChange = (sortValue: string) => {
    onSelectSortOrder(sortValue);
  };

  const currentSortOrder = options.find((item) => item.value === sortOrder);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        width={220}
        textAlign="left"
      >
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {options.map((sort, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                handleSortChange(sort?.value);
              }}
              value={sort.value}
            >
              {sort.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
