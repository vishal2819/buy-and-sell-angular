import { getAllListingsRoute  } from "./getAllListings";
import { getListingsRoute } from "./getListings";
import { addViewToListingRoute }  from "./addViewToListing";
import { getUserLitstingsRoute } from "./getUserListing";
import { createNewListingRoute } from "./createNewListing";
import { updateListingRoute  } from "./updateListing";
import { deleteListingRoute  } from "./deleteListing";

export default [
  addViewToListingRoute,
  getAllListingsRoute,
  getListingsRoute,
  getUserLitstingsRoute,
  createNewListingRoute,
  updateListingRoute,
  deleteListingRoute,
];
