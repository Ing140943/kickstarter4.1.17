import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x9beE157d3159Fe5B0edF91b53dc61E0A5D33b3ed'
);

export default instance;