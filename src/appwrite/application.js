import {
  DATABASE_ID,
  APPLICATION_COLLECTION_ID,
  BUCKET_ID,
} from "./appwrite.config";
import { databases, storage } from "./client";
import { ID, Query } from "appwrite";

const applicationService = {
  async createApplication(userId, data) {
    try {
      return await databases.createDocument(
        DATABASE_ID,
        APPLICATION_COLLECTION_ID,
        ID.unique(),
        {
          companyName: data.companyName,
          role: data.role,
          location: data.location,
          status: data.status || "Applied",
          appliedDate: data.appliedDate,
          companyEmail: data.companyEmail,
          companyLogoUrl: data.companyLogoUrl,
          notes: data.notes || "",
          companyWebsite: data.companyWebsite,
          minSalary: data.minSalary,
          maxSalary: data.maxSalary,
          userId,
        },
      );
    } catch (error) {
      throw error;
    }
  },
  async getApplication(applicationId) {
    try {
      return await databases.getDocument(
        DATABASE_ID,
        APPLICATION_COLLECTION_ID,
        applicationId,
      );
    } catch (error) {
      return null;
    }
  },
  async getApplications(userId) {
    try {
      return await databases.listDocuments(
        DATABASE_ID,
        APPLICATION_COLLECTION_ID,
        [Query.equal("userId", userId)],
      );
    } catch (error) {
      return null;
    }
  },
  async deleteApplication(applicationId) {
    try {
      databases.deleteDocument(
        DATABASE_ID,
        APPLICATION_COLLECTION_ID,
        applicationId,
      );
      return true;
    } catch (error) {
      return false;
    }
  },

  async updateApplication(applicationId, data) {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        APPLICATION_COLLECTION_ID,
        applicationId,
        data,
      );
    } catch (error) {
      throw error;
    }
  },
};

export default applicationService;
