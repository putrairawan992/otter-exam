import {
  serviceWithoutToken
} from "./httpClient";

/** Service With Token */


/** Service Without Token */
export const apiGetWithoutToken = (url,
   params = null) => {
  return serviceWithoutToken().get(url, {
    params: params
  });
};
