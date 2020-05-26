import { PATH_LOCATION } from "../../services/path/location";
import { apiGetWithoutToken } from "../../services/api";

async function getListProvince(props) {
    let response = "";
    try {
        response = await apiGetWithoutToken(PATH_LOCATION.PROVINCES);
        return response;
    } catch (error) {
        return error;
    }
};

async function getListDistricts(props) {
    let id = props.id
    let response = "";
    try {
        response = await apiGetWithoutToken(`${PATH_LOCATION.PROVINCES}/${id}/districts`);
        return response;
    } catch (error) {
        return error;
    }
};

const Locations = {
    getListProvince,
    getListDistricts
}

export default Locations;