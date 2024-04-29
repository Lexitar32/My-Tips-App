type Input = {
  type: string;
  placeholder: string;
  style: string;
};

export const Input = ({ type, placeholder, style }: Input) => {
  return <input type={type} placeholder={placeholder} className={style} />;
};
