import { ID } from "appwrite";
import { account } from "./client";

const auth = {
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (!userAccount) return null;
      return this.login({ email, password });
    } catch (error) {
      throw error;
    }
  },
  async login({ email, password }) {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  },
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  },

  async logout() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      console.error("AuthService :: logout :: error", error.message);
    }
  },
  async updatePassword(newPassword, currentPassword) {
    try {
      return await account.updatePassword(newPassword, currentPassword);
    } catch (error) {
      throw error;
    }
  },
  async deleteAccount() {
    try {
      return await account.delete();
    } catch (error) {
      throw error;
    }
  },
};

export default auth;
