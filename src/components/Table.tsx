import Client from '@/core/Client';
import { DeleteIcon, EditIcon } from './Icons';

type TablePropsType = {
  clients: Client[];
  openEditClient: (client: Client) => void;
  deleteClient: (client: Client) => void;
};

export default function Table(props: TablePropsType) {
  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${
            i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'
          } text-center`}
        >
          <td className='p-4'>{client.id}</td>
          <td className='p-4'>{client.name}</td>
          <td className='p-4'>{client.age}</td>
          <td className='p-4 flex justify-center items-center'>
            <button
              className='text-green-500 hover:scale-125 mx-1 duration-300'
              onClick={() => props.openEditClient?.(client)}
            >
              {EditIcon}
            </button>
            <button
              className='text-red-500 hover:scale-125 mx-1 duration-300'
              onClick={() => props.deleteClient?.(client)}
            >
              {DeleteIcon}
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <table className='w-full rounded-xl overflow-hidden'>
      <thead className='bg-gradient-to-r from-purple-500 to-purple-800 text-gray-200'>
        <tr>
          <th className='text-center p-4'>ID</th>
          <th className='text-center p-4'>Name</th>
          <th className='text-center p-4'>Age</th>
          <th className='text-center p-4'>Actions</th>
        </tr>
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
