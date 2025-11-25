import {Client, Account, Avatars } from 'react-native-appwrite';

// tells which project to connect to and the endpoint URL
const client = new Client()
    .setProject("691d5bf6000e06f2505c")
    .setEndpoint("https://syd.cloud.appwrite.io/v1");

export const account = new Account(client); // create account instance to backend, for auth purposes
export const avatars = new Avatars(client);
