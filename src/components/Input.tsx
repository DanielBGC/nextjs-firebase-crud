type InputPropsType = {
  label: string;
  type: 'text' | 'number';
  readOnly?: boolean;
  value: any;
  onChange?: (value: any) => void;
};

export default function Input(props: InputPropsType) {
  return (
    <div className='flex flex-col mb-5'>
      <label htmlFor='' className='mb-1 font-semibold'>
        {props.label}
      </label>
      <input
        className={`
          border border-purple-500 
          rounded-md 
          focus:outline-none 
          px-4 py-2 
          bg-gray-100
          focus:bg-white
        `}
        type={props.type ?? 'text'}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
        readOnly={props.readOnly ?? false}
        disabled={props.readOnly ?? false}
      />
    </div>
  );
}
