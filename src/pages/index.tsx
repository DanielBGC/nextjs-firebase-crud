import { GreenButton } from '@/components/Buttons';
import Form from '@/components/Form';
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import Client from '@/core/Client';
import ClientRepository from '@/core/ClientRepository';
import ClientCollection from '@/firebase/db/ClientCollection';
import { useEffect, useState } from 'react';

export default function Home() {
  const repo: ClientRepository = new ClientCollection();

  const [clients, setClients] = useState<Client[]>([]);
  const [client, setClient] = useState<Client>(new Client('', 0, ''));
  const [formVisible, setFormVisibility] = useState(false);

  useEffect(() => {
    getAllClients();
  }, []);

  const getAllClients = () => {
    console.log('getAllClients');
    repo.getAll().then((clients) => {
      setClients(clients);
      setFormVisibility(false);
    });
  };

  const openNewClient = () => {
    setFormVisibility(true);
    setClient(new Client('', 0, ''));
  };

  const saveClient = async (client: Client) => {
    await repo.save(client);
    getAllClients();
  };

  const openEditClient = (client: Client) => {
    setFormVisibility(true);
    setClient(client);
  };

  const deleteClient = async (client: Client) => {
    await repo.delete(client);
    getAllClients();
  };

  const goBack = () => {
    setFormVisibility(false);
  };

  return (
    <>
      <div
        className={`
        flex 
        justify-center 
        items-center 
        h-screen 
        bg-gradient-to-r from-purple-500 to-blue-600 
        text-white
      `}
      >
        <Layout title='CRUD'>
          {!formVisible && (
            <>
              <div className='flex justify-end'>
                <GreenButton className='mb-4' onClick={openNewClient}>
                  New Client
                </GreenButton>
              </div>
              <Table
                clients={clients}
                openEditClient={openEditClient}
                deleteClient={deleteClient}
              />
            </>
          )}
          {formVisible && (
            <Form client={client} goBack={goBack} saveClient={saveClient} />
          )}
        </Layout>
      </div>
    </>
  );
}
