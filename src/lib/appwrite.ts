import { Client, Databases, ID, Account } from "appwrite";

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

// Initialize the Databases and Account services
const databases = new Databases(client);
const account = new Account(client);

// Define your database and collection IDs using environment variables
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const CONTACT_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID!;

// Function to save contact form data
export const saveContactFormData = async (data: object) => {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      CONTACT_COLLECTION_ID,
      ID.unique(),
      data
    );
    return response;
  } catch (error) {
    console.error('Error saving contact form data:', error);
    throw error;
  }
};

// Function to get all contact form submissions
export const getAllContactSubmissions = async () => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      CONTACT_COLLECTION_ID
    );
    return response.documents;
  } catch (error) {
    console.error('Error getting contact form submissions:', error);
    throw error;
  }
};

// Login function
export const login = async (email: string, password: string) => {
  try {
    await account.createEmailPasswordSession(email, password);
    return true;
  } catch (error) {
    console.error('Login failed:', error);
    return false;
  }
};

// Logout function
export const logout = async () => {
  try {
    await account.deleteSession('current');
    return true;
  } catch (error) {
    console.error('Logout failed:', error);
    return false;
  }
};

// Check if user is logged in
export const isLoggedIn = async () => {
  try {
    const session = await account.get();
    return !!session;
  } catch (error) {
    console.log('Failed to check if user is logged in:', error);
    return false;
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    console.error('Failed to get current user:', error);
    return null;
  }
};

export { client, databases, account };