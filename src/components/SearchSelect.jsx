import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SearchSelect() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a search type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Search Types</SelectLabel>
          <SelectItem value="character">Character</SelectItem>
          <SelectItem value="location">Location</SelectItem>
          <SelectItem value="episode">Episode</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
