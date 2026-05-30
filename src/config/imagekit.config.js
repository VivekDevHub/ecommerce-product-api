import { ImageKit } from "@imagekit/nodejs/client.js";
import envs from "./env.config.js";

const client = new ImageKit({
    privateKey: envs.IMAGEKIT_PRIVATE_KEY, 
});

export default client;