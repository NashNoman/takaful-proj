import admin from "firebase-admin";

interface FirebaseAdminAppParams {
  projectId: string;
  privateKey: string;
  clientEmail: string;
  storageBucket: string;
}

export function createFirebaseAdminApp({
  projectId,
  privateKey,
  clientEmail,
  storageBucket,
}: FirebaseAdminAppParams) {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  const pk = privateKey.replace(/\\n/g, "\n");

  const app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      privateKey: pk,
      clientEmail,
    }),
    storageBucket,
    projectId,
  });

  return app;
}

export async function initAdmin() {
  const params = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
    privateKey: process.env.FIREBASE_PRIVATE_KEY as string,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  };

  return createFirebaseAdminApp(params);
}
