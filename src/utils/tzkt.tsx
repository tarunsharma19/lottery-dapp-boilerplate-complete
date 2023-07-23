// TODO 8 - Fetch storage of the Lottery by completing fetchStorage

import axios from "axios";

export const fetchStorage = async () => {
    const res = await axios.get(
        "https://api.ghostnet.tzkt.io/v1/contracts/KT1F8k5puUD92QFMovr81Vn6AeZiiL6Eofq6/storage"
    );
    return res.data;
};
