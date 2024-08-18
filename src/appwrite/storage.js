import config from "../config/config";
import { Client, Storage, ID } from "appwrite";

export class StorageService {
  client = new Client();
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.bucket = new Storage(this.client);
  }

  
}
