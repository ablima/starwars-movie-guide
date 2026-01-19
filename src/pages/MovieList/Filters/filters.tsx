import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import type { sortOptions } from "../../../types";
import './filters.css';

interface ListFiltersProps {
  sort: sortOptions;
  setSort: (sort: sortOptions) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

const ListFilters = ({
  sort,
  setSort,
  filter,
  setFilter
}: ListFiltersProps) => {
  return (
    <div className="filters">
      <Stack direction={'row'} className="filterRow" spacing={4}>
        <FormControl>
          <InputLabel>Sort by</InputLabel>
          <Select
            id="dropdown-basic-button"
            value={sort}
            label="Sort by"
            className="sortSelect"
            onChange={(e) => setSort(e.target.value)}
          >
            <MenuItem value="episode">Episode</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="year">Year</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            type="text"
            value={filter}
            label="Filter by title"
            placeholder="Type to filter..."
            onChange={(e) => setFilter(e.target.value)}
          />
        </FormControl>
      </Stack>
    </div>
  );
}

export default ListFilters;
