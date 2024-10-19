import { Client, Databases, ID } from "appwrite";

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

// Initialize the Databases service
const databases = new Databases(client);

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