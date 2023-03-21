import { GreenButton } from '@/components/Buttons';
import Form from '@/components/Form';
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import Client from '@/core/Client';
import { useState } from 'react';

export default function Home() {
  const [formVisible, setFormVisibility] = useState(false);

  const clients = [
    new Client('Daniel', 20, '1'),
    new Client('Letícia', 25, '2'),
    new Client('John Doe', 12, '3'),
  ];

  const openEditClient = (client: Client) => {
    console.log(client);
  };

  const openDeleteClient = (client: Client) => {
    console.log(client);
  };

  const saveClient = (client: Client) => {
    console.log(client);
  };

  const openNewClient = () => {
    setFormVisibility(true);
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
                openDeleteClient={openDeleteClient}
              />
            </>
          )}
          {formVisible && (
            <Form client={clients[0]} goBack={goBack} saveClient={saveClient} />
          )}
        </Layout>
      </div>
    </>
  );
}
