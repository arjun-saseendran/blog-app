import config from '../config/config';
import { Client, Databases, Storage, Query } from 'appwrite';

export class DBService{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }

}