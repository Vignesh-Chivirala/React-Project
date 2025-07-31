import conf from '../conf.js';
import { Client,Account,ID } from 'appwrite';


export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

    }
    async createAccount({email,password,name}){
        try {
            const userAccount =await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return 
            }else{
                return userAccount
            }
        } catch (error) {
            console.log("Appwrite Service Create User Error",error) 
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
            
        } catch (error) {
            console.log("Appwrite Service Login Error",error)
            
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log("Appwrite Service GetUser Error",error)
        }
    }
    
    async logout(){
        try {
            return  this.account.deleteSessions();
            
        } catch (error) {
            console.log("Appwrite Service LogOut Error",error)
            
        }
    }
    
}
const authService=new AuthService();

export default authService

