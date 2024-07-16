import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost : ", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service::", error);
      return false;
    }
  }

  async getPost(slug){
    try {
        return await this.databases.getDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
        )
        
    } catch (error) {
        console.log("Appwrite Service:: getpost ::", this.getPost);
        
    }
  }

  async getPosts(queries = [Query.equal('status', 'active')]){
    try {
        return await this.databases.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            queries,
        )
    } catch (error) {
        console.log("Appwrite Service :: ", error);
        return false
    }
  }
  // file upload services:
  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            config.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite Service :: ", err)
        return false
    }
  }

  async deleteFile(fileID){
    try {
        await this.bucket.deleteFile(
            config.appwriteBucketId,
            fileID
        ) 
        return true
    } catch (error) {
        console.log("Appwrite Error: ", error);
    }
  }

  getFilePreview(fileID){
    return this.bucket.getFilePreview(
        config.appwriteBucketId,
        fileID
    )
  }

}
const service = new Service();
export default Service;
