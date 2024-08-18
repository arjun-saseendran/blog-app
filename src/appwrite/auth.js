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
    
    async getCurrentUser(){

        try {
            return await this.account.get()
            
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() :: ",error);
            
            
        }
        return null;

    }
    async logout(){
        try {
            await this.account.deleteSessions()
            
        } catch (error) {
            console.log("Appwrite service :: logout() :: ",error);
        }
    }


}

const authService = new AuthService();
export default authService;