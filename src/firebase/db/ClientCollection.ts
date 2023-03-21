// import firebase from '../config'
// const firebase = require('../config');

import firebase from '../config';
import Client from '@/core/Client';
import ClientRepository from '@/core/ClientRepository';
// import { app, database } from '../config'

export default class ClientCollection implements ClientRepository {
  #converter = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Client {
      const data = snapshot?.data(options);

      return new Client(data.name, data.age, snapshot?.id);
    },
  };

  async save(client: Client): Promise<Client> {
    if (client?.id) {
      await this.#collection().doc(client.id).set(client);
      return client;
    } else {
      const docRef = await this.#collection().add(client);
      const doc = await docRef.get();
      const newClient = doc.data();
      return newClient!;
    }
  }

  async delete(client: Client): Promise<void> {
    return await this.#collection().doc(client.id).delete();
  }

  async getAll(): Promise<Client[]> {
    const query = await this.#collection().get();
    const clients = query.docs.map((doc) => doc.data());
    return clients ?? [];
  }

  #collection() {
    return firebase
      .firestore()
      .collection('clients')
      .withConverter(this.#converter);
  }
}
