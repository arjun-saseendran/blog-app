import config from '../config/config'
import { Client, Account } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({name, email, password}){
        try{
            const userAccount = await this.account.create(ID.unique(), name, email, password)
            if(userAccount){
                return this.login({email, password})
            }else{
                return userAccount
            }
        }catch(error){
            throw error
        }

    }
    
    async login({email, password}){

    try {
        return await this.account.createEmailSession(email, password)
        
    } catch (error) {
        throw error
    }
    
    }
    
    async getCurrentUser(){}
    async logout(){}


}



 const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);