import Title from './Title';

type LayoutPropsType = {
  title: string;
  children: React.ReactNode;
};

export default function Layout(props: LayoutPropsType) {
  return (
    <div
      className={`
      flex 
      flex-col w-2/3
      bg-white
      text-gray-800
      rounded-md
    `}
    >
      <Title>{props.title}</Title>

      <div className='p-6'>{props.children}</div>
    </div>
  );
}
