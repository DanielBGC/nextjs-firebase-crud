import Client from '@/core/Client';
import { useState } from 'react';
import { BlueButton, GrayButton } from './Buttons';
import Input from './Input';

type FormPropsType = {
  client: Client;
};

export default function Form(props: FormPropsType) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <form>
      {id && <Input label='ID' type='text' value={id} readOnly={true}></Input>}
      <Input label='Name' type='text' value={name} onChange={setName}></Input>
      <Input label='Age' type='number' value={age} onChange={setAge}></Input>

      <div className='flex justify-end gap-2 mt-8'>
        <BlueButton>{id ? 'Edit' : 'Save'}</BlueButton>
        <GrayButton>Cancel & Go Back</GrayButton>
      </div>
    </form>
  );
}
