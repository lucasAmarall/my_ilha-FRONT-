type TSpotsListItem = {
  name: string;
  id: string;
};

type TSpotsListReducer = {
  spots: TSpotsListItem[];
  active_id: string | null;
};

type TAddOrRemoveSpotToList = {
  spot: TSpotsListItem;
};

type ISetActiveId = {
  id: string;
};
