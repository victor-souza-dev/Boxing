import { Suspense, useEffect, useState, useTransition } from "react";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { v4 } from "uuid";

import { useGetBoxingCombinations } from "src/shared/queries/mock/boxing-combinations";

import Boxing from "../../../public/assets/boxing.svg";

function textProcessing(text: string) {
  const specialCharsRegex = /[^\w\s]/g;
  const lowerCaseText = text.toLowerCase();
  const treatedText = lowerCaseText.replace(specialCharsRegex, "");
  return treatedText;
}

export default function Index() {
  const { data } = useGetBoxingCombinations();
  const [search, setSearch] = useState("");

  const [filteredData, setFilteredData] = useState(data);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      const filterData = data?.filter((item) =>
        textProcessing(item.name).includes(textProcessing(search)),
      );
      setFilteredData(filterData);
    });
  }, [search, data]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Grid container p={"50px 10px"} gap={10}>
      <Grid item container justifyContent={"center"} gap={2}>
        <img width={60} src={Boxing} alt="Boxing logo" />
        <Typography variant="h2" fontWeight={"bold"} textAlign={"center"}>
          Boxe dos Guri
        </Typography>
      </Grid>
      <Grid item container p={{ sm: 0, lg: "0 30%" }}>
        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
          <InputLabel htmlFor="search-boxing">Pesquisar</InputLabel>
          <OutlinedInput
            id="search-boxing"
            placeholder="Buscar combinação..."
            onChange={onChangeSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            value={search}
            endAdornment={
              <InputAdornment position="end">
                {search.length > 0 && (
                  <IconButton onClick={() => setSearch("")}>
                    <CloseIcon />
                  </IconButton>
                )}
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
      </Grid>
      <Grid item container>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          {(!data || isPending) && <CircularProgress />}
        </Grid>
        <SimpleTreeView color="primary" sx={{ width: "100%" }}>
          <Grid
            container
            sx={{
              width: "100%",
              alignItems: "flex-start",
              justifyContent: { xs: "flex-start", md: "center" },
              flexDirection: "row",
              flexWrap: "wrap",
            }}
            columnSpacing={{ xs: 0, lg: 2 }}
            gap={1}
          >
            <Suspense fallback={<CircularProgress />}>
              {filteredData?.map((item) => (
                <Grid item key={v4()} sx={{ my: 1 }} xs={12} lg={2}>
                  <TreeItem
                    key={v4()}
                    itemId={item.name}
                    label={`${item.name}`}
                  >
                    {item.data.map((subItem, index) => (
                      <TreeItem
                        key={v4()}
                        itemId={v4()}
                        label={`${index + 1} - ${subItem}`}
                        sx={{ mt: 1 }}
                      />
                    ))}
                  </TreeItem>
                </Grid>
              ))}
            </Suspense>
          </Grid>
        </SimpleTreeView>
      </Grid>
    </Grid>
  );
}
