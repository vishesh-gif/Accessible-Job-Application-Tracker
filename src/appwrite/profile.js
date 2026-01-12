import { DATABASE_ID, PROFILE_COLLECTION_ID } from "./appwrite.config";
import { databases } from "./client";

const profileService = {
  async createProfile(userId, data) {
    try {
      return await databases.createDocument(
        DATABASE_ID,
        PROFILE_COLLECTION_ID,
        userId,
        {
          avatarId: data.avatarId,
          bio: data.bio,
          completed: true,
          location: data.location,
          userId: data.userId,
        }
      );
    } catch (error) {
      throw error;
    }
  },
  async getProfile(userId) {
    try {
      return await databases.getDocument(
        DATABASE_ID,
        PROFILE_COLLECTION_ID,
        userId
      );
    } catch (error) {
      return null;
    }
  },
  async updataProfile(userId, data) {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        PROFILE_COLLECTION_ID,
        userId,
        data
      );
    } catch (error) {
      throw error;
    }
  },
};

export default profileService;
